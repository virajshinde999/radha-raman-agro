import "./OurStory.css";

function OurStory() {
  return (
    <section className="our-story section">
      <div className="container our-story-grid">

        <div className="our-story-content">
          <span className="section-eyebrow">
            Our Story
          </span>

          <div className="our-story-logo-wrap">
            <div className="our-story-logo-glow"></div>

            <div className="our-story-logo-glass">
              <img
                src="/images/brand/radha-raman-logo.png"
                alt="Radha Raman Agro"
                className="our-story-logo"
              />
            </div>
          </div>

          <h2>
            Bringing Nature's
            <span>Goodness</span> to Everyday Life
          </h2>

          <p className="our-story-lead">
            Radha Raman Agro was built with a simple idea —
            natural ingredients should remain as close to their
            original goodness as possible.
          </p>

          <p>
            We carefully select fruits, vegetables, herbs and spices
            and transform them into convenient naturally dried powders.
            Our focus is on quality ingredients, thoughtful processing
            and consistent packaging.
          </p>

          <p>
            From everyday cooking to wellness-focused lifestyles,
            our products are created to make natural ingredients
            easier to use and store.
          </p>

          <div className="our-story-points">
            <div>
              <strong>01</strong>
              <span>Carefully Selected Ingredients</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Thoughtful Processing</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Quality-Focused Packaging</span>
            </div>
          </div>
        </div>

       

      </div>
    </section>
  );
}

export default OurStory;