// API route for signup form submissions.
// Lives at /api/signup — the form posts to this URL.
//
// What it does:
//   1. Logs every signup to the server console (so you can see things
//      working in your terminal).
//   2. If a CallMeBot API key is configured, sends Lara a WhatsApp
//      message with the new signup info.

const LARA_PHONE = '+46733361746';
const NOTIFICATION_TEXT =
  'I would love to join the parent interviews and get invitations to future tasting events';

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, phone } = payload || {};
  if (!name || !phone) {
    return Response.json(
      { error: 'Name and phone are required' },
      { status: 400 }
    );
  }

  // 1) Log to the server terminal (visible where you ran `npm run dev`)
  console.log('— New Larimunch signup —');
  console.log('  Name:', name);
  console.log('  Phone:', phone);
  console.log('  Time:', new Date().toISOString());

  // 2) Send WhatsApp message via CallMeBot (free)
  //    Requires CALLMEBOT_API_KEY in .env.local — see README.
  const apiKey = process.env.CALLMEBOT_API_KEY;
  if (apiKey) {
    try {
      const message =
        `🌞 New Larimunch signup\n\n` +
        `From: ${name}\n` +
        `Phone: ${phone}\n\n` +
        `"${NOTIFICATION_TEXT}"`;

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
