import SignupForm from './components/SignupForm';

// This is the homepage (the page at "/").
// Edit any of the text below to change what visitors see.
export default function Home() {
  return (
    <>
      {/* ---------- Top header with horizontal logo ---------- */}
      <header className="site-header container">
        <img
          src="/logo-horizontal.jpeg"
          alt="Larimunch — real food, real laughter"
        />
      </header>

      {/* ---------- Hero ---------- */}
      <section className="hero container">
        <div className="logo-circle">
          <img src="/logo-circle.jpeg" alt="Larimunch logo" />
        </div>
        <h1>Larimunch</h1>
        <p className="tagline">real food · real laughter</p>
        <p className="intro">
          We're making tiny meals for tiny humans — wholesome, joyful, and
          made with the kind of care a parent puts into a snack pulled from
          their own pocket.
        </p>
      </section>

      {/* ---------- Sign-up CTA (moved up: visitors see this without scrolling) ---------- */}
      <section className="signup" id="signup">
        <h2>Want to taste?</h2>
        <p>
          We're hosting small tasting events (Malmö, Sweden) and parent
          interviews (you decide time and place, online possible) as we
          shape the first Larimunch mini-meals. Drop your phone number if
          you'd love to be part of it.
        </p>
        <SignupForm />
      </section>

      {/* ---------- Story ---------- */}
      <section className="story">
        <div className="container">
          <div className="story-block">
            <h2>How it started</h2>
            <p>
              Larimunch began the way most good things do: at a kitchen
              table, with a kid who'd rather eat the box than the broccoli.
            </p>
            <p>
              We're a small brand exploring an old idea — that mini-meals
              for kids can be <em>real food</em>, full of the things they
              actually need, and still feel like a little party.
            </p>
            <p>
              Right now we're in the listening phase. Talking with parents.
              Cooking small batches. Watching tiny faces light up — or
              pucker up. Both teach us something.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Three pillars ---------- */}
      <section className="pillars">
        <div className="pillars-grid">
          <div className="pillar">
            <span className="icon">🍓</span>
            <h3>Real food</h3>
            <p>No mystery ingredients. Just things you'd find in a kitchen.</p>
          </div>
          <div className="pillar">
            <span className="icon">😄</span>
            <h3>Real laughter</h3>
            <p>Mealtime should feel like a high-five, not a negotiation.</p>
          </div>
          <div className="pillar">
            <span className="icon">🌱</span>
            <h3>Built with parents</h3>
            <p>
              We listen, taste, tweak, repeat. You shape what Larimunch
              becomes.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Moments gallery ----------
            1. Lara's own kids-eating photo (real laughter)
            2. An oat field (where ingredients begin)
            3. A Swedish-style garden party with string lights
          Swap any of these by replacing the URL, or drop your own photos
          into /public and use src="/yourphoto.jpg".
      */}
      <section className="moments">
        <div className="container moments-grid">
          <figure>
            <img
              src="/children-eating.png"
              alt="Three kids enjoying healthy snacks together at an outdoor table"
            />
            <figcaption>Real laughter</figcaption>
          </figure>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=800&fit=crop"
              alt="A field of oats waving in the wind — where it all starts"
            />
            <figcaption>Where it begins</figcaption>
          </figure>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=800&fit=crop"
              alt="A Swedish-style garden party at dusk with paper lanterns and string lights"
            />
            <figcaption>Tasting events · Malmö</figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="site-footer">
        <p>© 2026 Larimunch · real food · real laughter</p>
      </footer>
    </>
  );
}
