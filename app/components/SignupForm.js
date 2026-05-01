'use client';

// "use client" tells Next.js this component runs in the browser
// (so we can use useState and respond to button clicks).

import { useState } from 'react';

export default function SignupForm() {
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
        body: JSON.stringify({ name, phone }),
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
        Thanks, {name || 'friend'} — we'll be in touch soon! 🌞
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="+46 70 123 4567"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        pattern="[+0-9\s\-]{6,}"
        required
      />
      <button type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Sign me up'}
      </button>
      {error && <p style={{ color: '#FAD98A', marginTop: 12 }}>{error}</p>}
    </form>
  );
}
