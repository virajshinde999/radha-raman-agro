import "./ProductShowcase.css";
import ProductInformation from "./ProductInformation";
import products from "../../data/products";

function ProductShowcase() {
  return (
    <section className="product-showcase section">
      <div className="container">

        <div className="product-showcase-heading">
          <span className="section-eyebrow">
            Our Products
          </span>

          <h2>
            Natural Products,
            <span>Made for Everyday Life</span>
          </h2>

          <p>
            Explore our range of naturally dried powders and discover
            their uses, ingredients, storage information and available sizes.
          </p>
        </div>

        <div className="product-showcase-list">
          {products.map((product, index) => (
            <ProductInformation
              key={product.id}
              product={product}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProductShowcase;