import "./ProductInformation.css";
import { openWhatsApp } from "../../utils/whatsapp";

function ProductInformation({ product, reverse = false }) {
  return (
    <article
      className={`product-information ${
        reverse ? "product-information-reverse" : ""
      }`}
    >
      <div className="product-information-image">

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

        <span className="product-information-category">
          {product.category}
        </span>

      </div>

      <div className="product-information-content">

        <span className="product-information-label">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p className="product-information-description">
          {product.description}
        </p>

        {product.benefits?.length > 0 && (
          <div className="product-info-block">
            <h4>Benefits</h4>

            <ul>
              {product.benefits.map((benefit) => (
                <li key={benefit}>
                  <span>✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.uses?.length > 0 && (
          <div className="product-info-block">
            <h4>Uses</h4>

            <ul>
              {product.uses.map((use) => (
                <li key={use}>
                  <span>•</span>
                  {use}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.ingredients?.length > 0 && (
          <div className="product-info-block">
            <h4>Ingredients</h4>

            <p className="product-simple-text">
              {product.ingredients.join(", ")}
            </p>
          </div>
        )}

        {product.storage && (
          <div className="product-info-block">
            <h4>Storage</h4>

            <p className="product-simple-text">
              {product.storage}
            </p>
          </div>
        )}

        <div className="product-information-bottom">

          <div className="product-sizes">
            <span>Available Sizes</span>

            <div>
              {Object.keys(product.sizes || {}).map((size) => (
                <b key={size}>{size}</b>
              ))}
            </div>
          </div>

          <button
            className="product-information-button"
            onClick={() =>
              openWhatsApp(
                `Hello Radha Raman Agro, mujhe ${product.name} ke baare mein information chahiye.`
              )
            }
          >
            Enquire on WhatsApp
          </button>

        </div>

      </div>
    </article>
  );
}

export default ProductInformation;