import "./MissionVision.css";

function MissionVision() {
  return (
    <section className="mission-vision section">
      <div className="container">

        <div className="mission-vision-heading">
          <span className="section-eyebrow">
            What Drives Us
          </span>

          <h2>
            Our Mission & <span>Vision</span>
          </h2>

          <p>
            Building a brand around natural ingredients, thoughtful
            processing and trust.
          </p>
        </div>

        <div className="mission-vision-grid">

          <article className="mission-card">
            <div className="mission-icon">🌿</div>

            <span className="mission-number">01</span>

            <h3>Our Mission</h3>

            <p>
              To make naturally dried ingredients convenient,
              accessible and reliable for everyday use while
              maintaining a strong focus on quality and care.
            </p>

            <div className="mission-line"></div>

            <span className="mission-tag">
              Quality • Simplicity • Care
            </span>
          </article>

          <article className="vision-card">
            <div className="vision-icon">✦</div>

            <span className="vision-number">02</span>

            <h3>Our Vision</h3>

            <p>
              To build a trusted Indian brand known for thoughtfully
              crafted natural powders and gradually bring our products
              to customers beyond India.
            </p>

            <div className="vision-line"></div>

            <span className="vision-tag">
              Trust • Growth • Natural Living
            </span>
          </article>

        </div>
      </div>
    </section>
  );
}

export default MissionVision;