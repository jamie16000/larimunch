// This is the homepage (the page at "/").
// Edit any of the text below to change what visitors see.
export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero container">
        <div className="hero-logo">
          <img src="/logo-website.png" alt="Larimunch logo" />
        </div>
        <p className="tagline">real food · real laughter</p>
        <p className="intro">
          Heat-and-eat family meals made from real ingredients — designed
          for kids, enjoyed by everyone at the table.
        </p>
      </section>

      {/* ---------- Tasting event teaser ---------- */}
      <section className="signup" id="tasting">
        <h2>The lunch party is coming</h2>
        <p>
          We're cooking up the first Larimunch box — four family meals,
          ready in minutes, made to taste like home. Before you can order,
          we're hosting a small tasting lunch in Malmö where a handful of
          families get to try the first batch and tell us what they think.
        </p>
        <a
          className="cta-link"
          href="mailto:lara.eipel@gmail.com?subject=Larimunch tasting event"
        >
          Send us a message to join the list
        </a>
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
              We spent months talking to families across Malmö — listening
              to the wins, the chaos, the mealtime negotiations. What we
              heard was the same thing everywhere: parents want{' '}
              <em>real food</em> on the table, without cooking from scratch
              every single night.
            </p>
            <p>
              So now we're cooking. The first Larimunch box will have four
              family meals — heat-and-eat, made from real ingredients,
              mild enough for kids and flavourful enough for the adults
              sharing the plate.
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
              Three months of listening. Now we're cooking. You'll shape
              what Larimunch becomes.
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
