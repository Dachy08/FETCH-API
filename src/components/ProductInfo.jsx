"use client"

import { useState } from "react"
import "../styles/ProductInfo.css"

function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0) {
      setQuantity(value)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} Chromebook(s) to cart!`)
  }

  return (
    <div className="product-info">
      <h1 className="product-title">{product.name}</h1>

      <div className="product-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(product.rating) ? "star filled" : "star"}>
            ★
          </span>
        ))}
        <span className="rating-value">{product.rating}/5</span>
      </div>

      <div className="product-price">
        <span className="current-price">${product.price}</span>
        <span className="original-price">${(product.price * 1.2).toFixed(2)}</span>
        <span className="discount">20% OFF</span>
      </div>

      <div className="product-actions">
        <div className="quantity-selector">
          <button onClick={decreaseQuantity} className="quantity-btn">
            -
          </button>
          <input type="number" min="1" value={quantity} onChange={handleQuantityChange} className="quantity-input" />
          <button onClick={increaseQuantity} className="quantity-btn">
            +
          </button>
        </div>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>

        <button className="wishlist-btn">♡ Wishlist</button>
      </div>

      <div className="product-tabs">
        <div className="tab-headers">
          <button
            className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button className={`tab-btn ${activeTab === "specs" ? "active" : ""}`} onClick={() => setActiveTab("specs")}>
            Specifications
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "description" && (
            <div className="description-tab">
              <p>{product.description}</p>
              <ul className="feature-list">
                <li>Fast boot times and automatic updates</li>
                <li>Built-in virus protection</li>
                <li>Long battery life for all-day productivity</li>
                <li>Access to thousands of apps on Google Play Store</li>
                <li>Lightweight design for easy portability</li>
              </ul>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="specs-tab">
              <table className="specs-table">
                <tbody>
                  {product.specs.map((spec, index) => (
                    <tr key={index}>
                      <td className="spec-name">{spec.name}</td>
                      <td className="spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
