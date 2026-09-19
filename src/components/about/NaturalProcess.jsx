import "./NaturalProcess.css";

function NaturalProcess() {
  const steps = [
    {
      number: "01",
      icon: "🌱",
      title: "Carefully Selected",
      text: "We begin with selected fruits, vegetables, herbs and spices."
    },
    {
      number: "02",
      icon: "✦",
      title: "Prepared With Care",
      text: "Ingredients are cleaned and prepared before the drying process."
    },
    {
      number: "03",
      icon: "☀️",
      title: "Naturally Dried",
      text: "The ingredients are dried and transformed into convenient powder."
    },
    {
      number: "04",
      icon: "📦",
      title: "Packed Carefully",
      text: "The finished powder is packed thoughtfully for convenient storage and use."
    }
  ];

  return (
    <section className="natural-process section">
      <div className="container">

        <div className="natural-process-heading">
          <span className="section-eyebrow">
            Our Process
          </span>

          <h2>
            From <span>Nature</span> to Your Kitchen
          </h2>

          <p>
            Every product follows a thoughtful journey designed around
            careful preparation, processing and packaging.
          </p>
        </div>

        <div className="process-wrapper">

          <div className="process-line"></div>

          <div className="process-grid">
            {steps.map((step) => (
              <article className="process-card" key={step.number}>

                <div className="process-number">
                  {step.number}
                </div>

                <div className="process-icon">
                  {step.icon}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default NaturalProcess;