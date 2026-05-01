# Larimunch website

Landing page for **Larimunch — real food · real laughter**.

Built with [Next.js](https://nextjs.org), deploys on [Vercel](https://vercel.com).

---

## Quick start (run it on your computer)

You need [Node.js 18 or newer](https://nodejs.org) installed.

1. Open this folder in VS Code (`File → Open Folder…`).
2. Open a terminal: `Terminal → New Terminal`.
3. Install dependencies (one-time, takes a minute):

   ```bash
   npm install
   ```

4. Start the site:

   ```bash
   npm run dev
   ```

5. Open <http://localhost:3000> in your browser. You should see your homepage!

The site auto-reloads as you edit files. Press `Ctrl + C` in the terminal to stop the server.

---

## What's where

| Path | What lives there |
|------|------------------|
| `app/page.js` | The homepage. **Edit text and sections here.** |
| `app/layout.js` | Page metadata (browser tab title, fonts) |
| `app/globals.css` | All colors, fonts, and spacing |
| `app/components/SignupForm.js` | The email signup form |
| `public/` | Static images. Files here are reachable at `/filename` |
| `brand/` | Brand book and source logos (NOT served on the website — for reference) |

---

## Brand colors

All defined as CSS variables in `app/globals.css`. Change them once and the whole site updates.

| Variable | Hex |
|----------|-----|
| `--coral` | `#D95F3B` |
| `--sunshine` | `#F5C842` |
| `--forest` | `#3D7A58` |
| `--cream` | `#FFF6EC` (background) |
| `--espresso` | `#2C1A0E` (text) |

Full palette and brand voice notes: see [`brand/brand-guide.md`](brand/brand-guide.md).

---

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. Go to <https://vercel.com/new>, import the repo.
3. Vercel auto-detects Next.js and deploys. You'll get a URL like `larimunch.vercel.app`.
4. In Vercel project settings → Domains, add `larimunch.com`.

---

## WhatsApp signup notifications (free, via CallMeBot)

Every form submission can send Lara a WhatsApp message. Setup is one-time:

1. On your phone, add **+34 644 51 95 23** to your WhatsApp contacts (name it "CallMeBot")
2. Open a WhatsApp chat with that contact
3. Send the exact message: `I allow callmebot to send me messages`
4. Wait up to a few minutes — the bot replies with your **API key**
5. In this folder, copy `.env.local.example` to `.env.local`:
   ```bash
   copy .env.local.example .env.local
   ```
6. Open `.env.local` and paste your key after `CALLMEBOT_API_KEY=`
7. Stop the dev server (`Ctrl + C`) and start it again with `npm run dev`

That's it — every signup will now ping you on WhatsApp.

## Roadmap

- [x] Brand-story landing page
- [x] Phone-number signup form
- [x] WhatsApp notifications via CallMeBot
- [ ] Snack-idea submission feature (community uploads)
- [ ] Online store
