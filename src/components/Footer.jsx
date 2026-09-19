import "./Footer.css";
import { Link } from "react-router-dom";
import { openWhatsApp } from "../utils/whatsapp";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>

      <div className="container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Radha Raman <span>Agro</span>
            </Link>

            <p>
              Naturally crafted powders made with carefully selected
              ingredients and thoughtful processing.
            </p>

            <button
              type="button"
              className="footer-whatsapp"
              onClick={() =>
                openWhatsApp(
                  "Hello Radha Raman Agro, mujhe aapke products ke baare mein information chahiye."
                )
              }
            >
              <span>●</span>
              Chat on WhatsApp
            </button>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <a href="/#shop">Shop Products</a>
            <Link to="/about">About Us</Link>
            <a href="/#contact">Contact Us</a>
          </div>

          {/* Products */}
          <div className="footer-column">
            <h3>Products</h3>

            <a href="/#shop">Moringa Powder</a>
            <a href="/#shop">Ginger Powder</a>
            <a href="/#shop">Garlic Powder</a>
            <a href="/#shop">Beetroot Powder</a>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Get In Touch</h3>

            <a href="tel:+91XXXXXXXXXX">
              +91 XXXXX XXXXX
            </a>

            <a href="mailto:hello@radharamanagro.com">
              hello@radharamanagro.com
            </a>

            <p>
              Maharashtra, India
            </p>
          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {currentYear} Radha Raman Agro. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;