import { useState } from "react";
import "./Contact.css";
import { openWhatsApp } from "../utils/whatsapp";
import Header from "../components/Header";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello Radha Raman Agro 👋

I have an enquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}

Thank you!`;

    openWhatsApp(whatsappMessage);
  };

  return (
    
    <main className="contact-page">

      {/* =========================
          CONTACT HERO
      ========================== */}

      <Header />

      <section className="contact-hero">

        <div className="contact-hero-orb contact-hero-orb-one"></div>
        <div className="contact-hero-orb contact-hero-orb-two"></div>

        <div className="container contact-hero-content">

          <span className="contact-eyebrow">
            Get In Touch
          </span>

          <h1>
            Let’s Talk About
            <span>Radha Raman Agro.</span>
          </h1>

          <p>
            Have a question about our products, pricing or orders?
            We would be happy to hear from you.
          </p>

        </div>

      </section>


      {/* =========================
          CONTACT SECTION
      ========================== */}

      <section className="section contact-section">

        <div className="container">

          <div className="contact-grid">

            {/* =========================
                CONTACT INFORMATION
            ========================== */}

            <div className="contact-info">

              <span className="section-label">
                Contact Us
              </span>

              <h2>
                We’re here to
                <span>help you.</span>
              </h2>

              <p className="contact-description">
                Whether you want to know more about our natural
                powders, place an order or discuss your requirements,
                feel free to contact us.
              </p>


              <div className="contact-details">

                {/* Phone */}

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="contact-card"
                >

                  <div className="contact-icon">
                    ☎
                  </div>

                  <div>
                    <span>Call Us</span>

                    <strong>
                      +91 XXXXX XXXXX
                    </strong>
                  </div>

                </a>


                {/* Email */}

                <a
                  href="mailto:hello@radharamanagro.com"
                  className="contact-card"
                >

                  <div className="contact-icon">
                    @
                  </div>

                  <div>
                    <span>Email Us</span>

                    <strong>
                      hello@radharamanagro.com
                    </strong>
                  </div>

                </a>


                {/* Location */}

                <div className="contact-card">

                  <div className="contact-icon">
                    ⌖
                  </div>

                  <div>
                    <span>Our Location</span>

                    <strong>
                      Maharashtra, India
                    </strong>
                  </div>

                </div>

              </div>


              {/* WhatsApp */}

              <button
                type="button"
                className="contact-whatsapp"
                onClick={() =>
                  openWhatsApp(
                    `Hello Radha Raman Agro 👋

I would like to know more about your products.

Please share the product details and pricing.

Thank you!`
                  )
                }
              >

                <span className="whatsapp-dot"></span>

                Chat on WhatsApp

                <b>↗</b>

              </button>

            </div>


            {/* =========================
                CONTACT FORM
            ========================== */}

            <div className="contact-form-card">

              <div className="contact-form-heading">

                <span>
                  Send an Enquiry
                </span>

                <h3>
                  How can we help?
                </h3>

                <p>
                  Fill in your details and we’ll get back to you.
                </p>

              </div>


              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* Name + Phone */}

                <div className="contact-form-row">

                  <div className="contact-field">

                    <label htmlFor="contact-name">
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                    />

                  </div>


                  <div className="contact-field">

                    <label htmlFor="contact-phone">
                      Phone Number
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      autoComplete="tel"
                      required
                    />

                  </div>

                </div>


                {/* Email */}

                <div className="contact-field">

                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                  />

                </div>


                {/* Message */}

                <div className="contact-field">

                  <label htmlFor="contact-message">
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us how we can help..."
                    required
                  />

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  className="contact-submit"
                >

                  <span>
                    Send Enquiry
                  </span>

                  <b>
                    ↗
                  </b>

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;