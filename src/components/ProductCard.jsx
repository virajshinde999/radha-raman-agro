import "./ProductCard.css";
import { useState, useEffect } from "react";
import { openWhatsApp } from "../utils/whatsapp";

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("100g");
  const [quantity, setQuantity] = useState(1);

  const sizes = Object.entries(product.sizes).map(
    ([label, price]) => ({
      label,
      price,
    })
  );

  const productImages =
  product.images && product.images.length > 0
    ? product.images
    : [
        {
          src: product.image,
          label: "Product",
        },
      ];
      

  useEffect(() => {
  if (productImages.length <= 1) return;

  const sliderTimer = setInterval(() => {
    setActiveImage((prev) =>
      prev === productImages.length - 1
        ? 0
        : prev + 1
    );
  }, 3000);

  return () => clearInterval(sliderTimer);
}, [productImages.length]);    

  const selectedSizeData = sizes.find(
    (size) => size.label === selectedSize
  );

  const selectedPrice = selectedSizeData.price;
  const totalPrice = selectedPrice * quantity;

  const handleBuyNow = () => {
    const message = `Hello Radha Raman Agro,

Mujhe ye product order karna hai:

Product: ${product.name}
Size: ${selectedSize}
Quantity: ${quantity}
Total: ₹${totalPrice}

Please confirm my order.`;

    openWhatsApp(message);
  };

  return (
    <>
     <article
        className="product-card"
        onClick={() => {
          setActiveImage(0);
          setIsModalOpen(true);
        }}
      >
        <div className="product-image-box">
        <div className="product-slider">

          <img
            src={productImages[activeImage].src}
            alt={`${product.name} - ${productImages[activeImage].label}`}
            className="product-image"
            loading="lazy"
          />

          

          <div className="slider-dots">
            {productImages.map((image, index) => (
              <button
                key={image.label}
                className={
                  activeImage === index
                    ? "slider-dot active"
                    : "slider-dot"
                }
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage(index);
                }}
                aria-label={`Show ${image.label}`}
              />
            ))}
          </div>

        </div>

          {product.featured && (
            <span className="product-badge">
              Featured
            </span>
          )}
        </div>

        <div className="product-info">
          <span className="product-category">
            {product.category}
          </span>

         <h3 className="product-name">
            {product.name.split(" ")[0]}{" "}
            <span>{product.name.split(" ").slice(1).join(" ")}</span>
         </h3>

          <p className="product-description">
            {product.description}
          </p>

          <div className="product-bottom">
            <div className="product-price">
              <strong>₹{product.price}</strong>
              <span>/ 100g</span>
            </div>

            <button
              className="product-order-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Order
              <span>↗</span>
            </button>
          </div>
        </div>
      </article>

      {isModalOpen && (
        <div
          className="order-modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="order-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="order-modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <div className="order-modal-header">
              <span className="order-modal-category">
                {product.category}
              </span>

              <h2>{product.name}</h2>

              <p>
                Choose your preferred pack size and quantity.
              </p>
            </div>

            <div className="order-option">
              <div className="order-option-title">
                <span>Pack Size</span>
              </div>

              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size.label}
                    className={
                      selectedSize === size.label
                        ? "size-option active"
                        : "size-option"
                    }
                    onClick={() =>
                      setSelectedSize(size.label)
                    }
                  >
                    <strong>{size.label}</strong>
                    <span>₹{size.price}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="order-quantity-row">
              <span>Quantity</span>

              <div className="quantity-control">
                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.max(1, prev - 1)
                    )
                  }
                >
                  −
                </button>

                <strong>{quantity}</strong>

                <button
                  onClick={() =>
                    setQuantity((prev) => prev + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div className="order-summary">
              <div>
                <span>Price</span>
                <strong>₹{selectedPrice}</strong>
              </div>

              <div>
                <span>Quantity</span>
                <strong>× {quantity}</strong>
              </div>

              <div className="order-total">
                <span>Total</span>
                <strong>₹{totalPrice}</strong>
              </div>
            </div>

           <button
              className="order-btn"
              onClick={() =>
                openWhatsApp(
                  `Hello Radha Raman Agro 👋

            I would like to order:

            Product: ${product.name}
            Size: ${selectedSize}
            Price: ₹${product.sizes[selectedSize]}

            Please confirm my order details.

            Thank you!`
                )
              }
            >
              Order on WhatsApp
            </button>

            <p className="order-note">
              Your order will be confirmed on WhatsApp.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;