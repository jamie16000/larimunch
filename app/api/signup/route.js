// API route for parent-interview signup form submissions.
// Lives at /api/signup — the form posts to this URL.
//
// What it does:
//   1. Logs every signup to the server console (so you can see things
//      working in your terminal).
//   2. If a CallMeBot API key is configured, sends Lara a WhatsApp
//      message with the new signup info — including all the fields
//      that help evaluate the diversity of the interviewee mix.

const LARA_PHONE = '+46733361746';
const NOTIFICATION_TAG = 'Tasting event signup — Larimunch';

// Pretty labels for select-field values that come in as keys
const FORMAT_LABEL = {
  home: 'At their home',
  cafe: 'At a café in Malmö',
  video: 'Video call',
  'lunch-party': 'Lunch-party event',
  any: 'No preference',
};

const LANGUAGE_LABEL = {
  swedish: 'Svenska',
  english: 'English',
  either: 'Either',
};

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const {
    name,
    phone,
    email,
    neighborhood,
    kidAges,
    preferredFormat,
    preferredLanguage,
    note,
  } = payload || {};

  // Required fields (matches the form's `required` attributes)
  if (!name || !phone || !neighborhood || !kidAges) {
    return Response.json(
      { error: 'Name, phone, neighborhood, and kid ages are required' },
      { status: 400 }
    );
  }

  // 1) Log to the server terminal (visible where you ran `npm run dev`)
  console.log('— New Larimunch interview signup —');
  console.log('  Name:', name);
  console.log('  Phone:', phone);
  console.log('  Email:', email || '(none)');
  console.log('  Neighborhood:', neighborhood);
  console.log('  Kid age(s):', kidAges);
  console.log('  Format:', preferredFormat ? FORMAT_LABEL[preferredFormat] || preferredFormat : '(no preference)');
  console.log('  Language:', preferredLanguage ? LANGUAGE_LABEL[preferredLanguage] || preferredLanguage : '(no preference)');
  console.log('  Note:', note || '(none)');
  console.log('  Time:', new Date().toISOString());

  // 2) Send WhatsApp message via CallMeBot (free)
  //    Requires CALLMEBOT_API_KEY in .env.local — see README.
  const apiKey = process.env.CALLMEBOT_API_KEY;
  if (apiKey) {
    try {
      const lines = [
        `🌞 ${NOTIFICATION_TAG}`,
        '',
        `Name: ${name}`,
        `Phone: ${phone}`,
      ];
      if (email) lines.push(`Email: ${email}`);
      lines.push(`Lives in: ${neighborhood}`);
      lines.push(`Kid age(s): ${kidAges}`);
      if (preferredFormat) {
        lines.push(`Format: ${FORMAT_LABEL[preferredFormat] || preferredFormat}`);
      }
      if (preferredLanguage) {
        lines.push(`Language: ${LANGUAGE_LABEL[preferredLanguage] || preferredLanguage}`);
      }
      if (note) lines.push(`Note: ${note}`);

      const message = lines.join('\n');

      const url =
        'https://api.callmebot.com/whatsapp.php' +
        `?phone=${encodeURIComponent(LARA_PHONE)}` +
        `&text=${encodeURIComponent(message)}` +
        `&apikey=${encodeURIComponent(apiKey)}`;

      const res = await fetch(url, { method: 'GET' });
      const text = await res.text();

      if (!res.ok) {
        console.error('CallMeBot returned non-OK status:', res.status, text);
      } else {
        console.log('  WhatsApp notification sent ✓');
      }
    } catch (err) {
      // Don't fail the signup just because the notification failed.
      console.error('CallMeBot send failed:', err);
    }
  } else {
    console.log(
      '  (No CALLMEBOT_API_KEY set — WhatsApp notification skipped)'
    );
  }

  return Response.json({ success: true });
}
