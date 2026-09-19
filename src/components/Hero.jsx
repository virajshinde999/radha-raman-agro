import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>
        <div className="hero-grid"></div>
      </div>

      {/* Floating Leaves */}
      <div className="floating-leaf leaf-one">🌿</div>
      <div className="floating-leaf leaf-two">🍃</div>
      <div className="floating-leaf leaf-three">🌱</div>

      <div className="hero-container">

        {/* ================= CONTENT ================= */}

        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>

            <span className="eyebrow-text">
              Pure • Natural • Carefully Made
            </span>

            <span className="eyebrow-dot"></span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">Pure Goodness,</span>

            <span className="title-line title-highlight">
              Naturally Preserved.
            </span>
          </h1>

          <p className="hero-description">
            Premium natural dry powders made from carefully selected
            fruits, vegetables, herbs and spices — bringing nature's
            goodness to your everyday life.
          </p>

          {/* Buttons */}

          {/* Buttons */}

          <div className="hero-actions">

            <a href="#shop" className="hero-primary-btn">
              <span>Explore Products</span>
              <span className="btn-arrow">↗</span>
            </a>

            <Link
              to="/about"
              className="hero-whatsapp-btn"
            >
              <span>About Radha Raman Agro</span>
              <span className="btn-arrow">↗</span>
            </Link>

          </div>

          {/* Trust */}

          <div className="hero-trust">

            <div className="trust-item">
              <span className="trust-icon">✦</span>

              <div>
                <strong>100%</strong>
                <small>Natural</small>
              </div>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <span className="trust-icon">◇</span>

              <div>
                <strong>Fresh</strong>
                <small>Ingredients</small>
              </div>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <span className="trust-icon">✓</span>

              <div>
                <strong>Quality</strong>
                <small>You Can Trust</small>
              </div>
            </div>

          </div>

        </div>


        {/* ================= VISUAL ================= */}

        <div className="hero-visual">

          {/* Animated Rings */}

          <div className="visual-ring ring-one"></div>
          <div className="visual-ring ring-two"></div>

          <div className="hero-glow"></div>

          <div className="hero-image-wrapper">

            <img
              src="/images/hero-products.png"
              alt="Radha Raman Agro natural dry powders"
              className="hero-image"
            />

            <div className="image-shine"></div>

          </div>


          {/* Natural Badge */}

          <div className="floating-badge badge-natural">

            <span className="badge-icon">🌿</span>

            <div>
              <strong>Pure Natural</strong>
              <small>From Nature</small>
            </div>

          </div>


          {/* Quality Badge */}

          <div className="floating-badge badge-quality">

            <span className="badge-icon">✓</span>

            <div>
              <strong>Quality First</strong>
              <small>Made With Care</small>
            </div>

          </div>


          {/* Floating Mini Powder */}

          <div className="floating-powder powder-one"></div>
          <div className="floating-powder powder-two"></div>

        </div>

      </div>


      {/* Bottom Scroll */}

      <div className="hero-scroll">

        <span className="scroll-line"></span>

        <span>Scroll to explore</span>

        <span className="scroll-arrow">↓</span>

      </div>

    </section>
  );
}

export default Hero;