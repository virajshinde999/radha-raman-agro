import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "./ProductSection.css";

function ProductSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Fruits",
    "Vegetables",
    "Herbal",
    "Spices",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section className="products-section" id="shop">

      <div className="products-container">

        {/* Section Heading */}

        <div className="products-heading">

          <span className="section-eyebrow">
            Our Collection
          </span>

          <h2>
            Explore Our
            <span>Natural Products.</span>
          </h2>

          <p>
            Carefully crafted natural powders made from
            selected fruits, vegetables, herbs and spices.
          </p>

        </div>


        {/* Category Filter */}

        <div className="category-filter">

          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>


        {/* Product Grid */}

        <div className="product-grid">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductSection;