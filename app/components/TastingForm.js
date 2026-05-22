'use client';

import { useState } from 'react';

export default function TastingForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          neighborhood: 'tasting-signup',
          kidAges: '—',
        }),
      });

      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Something went wrong — try again or message us directly on WhatsApp.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <p className="tasting-thanks">
        🌈 Thanks, {name}! We'll send you a WhatsApp when the date is set.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="tasting-form">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        aria-label="Your name"
      />
      <input
        type="tel"
        placeholder="Your WhatsApp number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        pattern="[+0-9\s\-]{6,}"
        required
        aria-label="WhatsApp number"
      />
      <button type="submit" disabled={sending}>
        {sending ? 'Sending…' : "Count me in 🙌"}
      </button>
      {error && <p className="tasting-error">{error}</p>}
    </form>
  );
}
