'use client';

// "use client" tells Next.js this component runs in the browser
// (so we can use useState and respond to button clicks).
//
// This form recruits parents for the customer-discovery interview phase.
// Required fields capture the basics for diversity tracking (where they
// live, ages of kids). Optional fields make the actual interview easier
// to schedule (format + language preference).

import { useState } from 'react';

const NEIGHBORHOODS = [
  'Centrum',
  'Möllevången / Sofielund',
  'Västra Hamnen / Dockan',
  'Limhamn',
  'Hyllie',
  'Rosengård',
  'Kirseberg',
  'Husie',
  'Oxie',
  'Lindängen / Lindeborg',
  'Other (Malmö)',
  'Lund',
  'Other (Skåne)',
  'Outside Skåne',
];

const initialState = {
  name: '',
  phone: '',
  email: '',
  neighborhood: '',
  kidAges: '',
  preferredFormat: '',
  preferredLanguage: '',
  note: '',
};

export default function SignupForm() {
  const [data, setData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const update = (field) => (e) =>
    setData((s) => ({ ...s, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <p className="thanks">
        Tack, {data.name || 'friend'}! 🌞 I'll reach out within a few days
        to find a time that works.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="interview-form">
      {/* Required: name + phone (side by side on wider screens) */}
      <div className="field-row">
        <input
          type="text"
          placeholder="Your name *"
          value={data.name}
          onChange={update('name')}
          required
          aria-label="Your name"
        />
        <input
          type="tel"
          placeholder="WhatsApp / phone *"
          value={data.phone}
          onChange={update('phone')}
          pattern="[+0-9\s\-]{6,}"
          required
          aria-label="Phone number"
        />
      </div>

      {/* Optional email */}
      <input
        type="email"
        placeholder="Email (optional)"
        value={data.email}
        onChange={update('email')}
        aria-label="Email"
      />

      {/* Required: neighborhood */}
      <select
        value={data.neighborhood}
        onChange={update('neighborhood')}
        required
        aria-label="Neighborhood"
      >
        <option value="" disabled>
          Where do you live? *
        </option>
        {NEIGHBORHOODS.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>

      {/* Required: kid age(s) */}
      <input
        type="text"
        placeholder="Age(s) of your kid(s) — e.g. 3, or 2 and 5 *"
        value={data.kidAges}
        onChange={update('kidAges')}
        required
        aria-label="Ages of your kids"
      />

      {/* Optional: format preference */}
      <select
        value={data.preferredFormat}
        onChange={update('preferredFormat')}
        aria-label="Preferred interview format"
      >
        <option value="">Preferred interview format (optional)</option>
        <option value="home">At my home</option>
        <option value="cafe">At a café in Malmö</option>
        <option value="video">Video call (Teams / Zoom)</option>
        <option value="lunch-party">Lunch-party event with other parents</option>
        <option value="any">No preference</option>
      </select>

      {/* Optional: language preference */}
      <select
        value={data.preferredLanguage}
        onChange={update('preferredLanguage')}
        aria-label="Preferred language"
      >
        <option value="">Preferred language (optional)</option>
        <option value="swedish">Svenska</option>
        <option value="english">English</option>
        <option value="either">Either is fine</option>
      </select>

      {/* Optional: note */}
      <textarea
        placeholder="Anything else you want me to know? (optional)"
        value={data.note}
        onChange={update('note')}
        rows={2}
        aria-label="Additional note"
      />

      <button type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Sign me up'}
      </button>

      {error && <p className="error">{error}</p>}

      <p className="form-footnote">
        Svenska eller engelska — båda fungerar. 30-minute chat, your time
        and place.
        <br />
        <small>
          Your info is used only to contact you about Larimunch interviews.
          Email{' '}
          <a href="mailto:lara.eipel@gmail.com">lara.eipel@gmail.com</a>{' '}
          any time to be removed.
        </small>
      </p>
    </form>
  );
}
