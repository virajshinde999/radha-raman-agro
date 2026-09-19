import "./AboutHero.css";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-orb about-hero-orb-one"></div>
      <div className="about-hero-orb about-hero-orb-two"></div>

      <div className="about-hero-content">

        <span className="about-hero-eyebrow">
          About Radha Raman Agro
        </span>

        <h1>
          Pure Ingredients.
          <span>Thoughtfully Crafted.</span>
        </h1>

        <p>
          We create naturally dried powders from carefully
          selected fruits, vegetables, herbs and spices —
          bringing nature's goodness into everyday life.
        </p>

        <div className="about-hero-highlights">
          <span>Natural Ingredients</span>
          <span>Carefully Processed</span>
          <span>Made With Care</span>
        </div>

      </div>

      <div className="about-hero-scroll">
        <span></span>
        <p>Discover our story</p>
      </div>
    </section>
  );
}

export default AboutHero;