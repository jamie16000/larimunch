import { Caveat, Nunito } from 'next/font/google';
import './globals.css';

// Handwritten display font that matches the Larimunch logo wordmark
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

// Friendly, rounded body font
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

// This shows up in the browser tab and in search results / link previews
export const metadata = {
  title: 'Larimunch — real food · real laughter',
  description:
    'Heat-and-eat family meals made from real ingredients — designed for kids, enjoyed by everyone at the table. Coming soon to Malmö.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${caveat.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
