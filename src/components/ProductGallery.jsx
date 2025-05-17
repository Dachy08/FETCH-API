"use client"

import { useState } from "react"
import "../styles/ProductGallery.css"

function ProductGallery({ images, selectedImage, setSelectedImage }) {
  const [zoomed, setZoomed] = useState(false)

  const handleThumbnailClick = (index) => {
    setSelectedImage(index)
  }

  const toggleZoom = () => {
    setZoomed(!zoomed)
  }

  return (
    <div className="product-gallery">
      <div className={`main-image-container ${zoomed ? "zoomed" : ""}`}>
        <img
          src={images[selectedImage] || "/placeholder.svg"}
          alt="Chromebook main view"
          className="main-image"
          onClick={toggleZoom}
        />
      </div>

      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${selectedImage === index ? "active" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image || "/placeholder.svg"} alt={`Chromebook view ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
