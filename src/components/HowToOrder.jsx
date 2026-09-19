import "./HowToOrder.css";
import { openWhatsApp } from "../utils/whatsapp";

function HowToOrder() {
  const steps = [
    {
      number: "01",
      icon: "🛍️",
      title: "Choose Your Products",
      text: "Browse our products and select the products and sizes you need."
    },
    {
      number: "02",
      icon: "💬",
      title: "Order on WhatsApp",
      text: "Send us your product requirements directly on WhatsApp."
    },
    {
      number: "03",
      icon: "✓",
      title: "Confirm Your Order",
      text: "We will confirm product availability, quantity and delivery details."
    },
    {
      number: "04",
      icon: "📦",
      title: "Get Your Order",
      text: "Once confirmed, your products will be prepared and dispatched."
    }
  ];

  return (
    <section className="how-to-order section" id="how-to-order">
      <div className="container">

        <div className="how-to-order-heading">
          <span className="section-eyebrow">
            Simple Ordering
          </span>

          <h2>
            How to <span>Order</span>
          </h2>

          <p>
            Getting your favourite Radha Raman Agro products is simple.
            Just choose, message and confirm.
          </p>
        </div>

        <div className="order-steps">

          {steps.map((step) => (
            <article className="order-step" key={step.number}>

              <div className="order-step-number">
                {step.number}
              </div>

              <div className="order-step-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </article>
          ))}

        </div>

        <div className="order-cta">

          <div>
            <span>Ready to place your order?</span>
            <h3>Order directly through WhatsApp</h3>
          </div>

          <button
            type="button"
            onClick={() =>
              openWhatsApp(
                "Hello Radha Raman Agro, mujhe aapke products order karne hain."
              )
            }
          >
            Order on WhatsApp
          </button>

        </div>

      </div>
    </section>
  );
}

export default HowToOrder;