import { useState } from "react";
import "./Header.css";
import { openWhatsApp } from "../utils/whatsapp";
import { Link, useLocation, useNavigate } from "react-router-dom";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navigate = useNavigate();

  const goToHomeSection = (sectionId) => {
  closeMenu();

  navigate("/");

  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
};

  return (
    <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
      <div className="header-container">

        {/* Logo */}
        <a href="/" className="brand-logo" onClick={closeMenu}>
          <span className="brand-icon">🌿</span>

          <span className="brand-text">
            <strong>Radha Raman</strong>
            <small>AGRO</small>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="/">Home</a>
          <a href="#shop">Shop</a>
          <a href="/about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">

          <button
            className="cart-button"
            aria-label="Shopping cart"
          >
            🛒
            <span className="cart-count">0</span>
          </button>

          <a
            href="https://wa.me/YOUR_WHATSAPP_NUMBER"
            className="whatsapp-header"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="mobile-nav">

  <a href="/" onClick={closeMenu}>
    Home
  </a>

  <a href="/#shop" onClick={closeMenu}>
    Shop Products
  </a>

  <a href="/about" onClick={closeMenu}>
    About Radha Raman Agro
  </a>

 <Link to="/contact">Contact Us</Link>

 

</nav>
    </header>
  );
}

export default Header;