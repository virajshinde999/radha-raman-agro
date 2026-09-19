import "./WhyChooseUs.css";

function WhyChooseUs() {
  const points = [
    {
      number: "01",
      icon: "🌿",
      title: "Natural Ingredients",
      text: "We focus on carefully selected fruits, vegetables, herbs and spices."
    },
    {
      number: "02",
      icon: "✦",
      title: "Thoughtful Processing",
      text: "Our ingredients are processed with care to create convenient dry powders."
    },
    {
      number: "03",
      icon: "✓",
      title: "Quality Focused",
      text: "We give attention to consistency, cleanliness and product presentation."
    },
    {
      number: "04",
      icon: "📦",
      title: "Careful Packaging",
      text: "Products are packed thoughtfully to maintain quality during storage and use."
    }
  ];

  return (
    <section className="why-choose section">
      <div className="container">

        <div className="why-choose-heading">
          <span className="section-eyebrow">
            Why Us
          </span>

          <h2>
            Simple Ingredients.
            <span>Thoughtful Approach.</span>
          </h2>

          <p>
            We believe that a good natural product starts with
            good ingredients and attention to every important detail.
          </p>
        </div>

        <div className="why-choose-grid">
          {points.map((point) => (
            <article className="why-card" key={point.number}>

              <div className="why-card-top">
                <span className="why-icon">
                  {point.icon}
                </span>

                <span className="why-number">
                  {point.number}
                </span>
              </div>

              <h3>{point.title}</h3>

              <p>{point.text}</p>

              <div className="why-card-line"></div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;