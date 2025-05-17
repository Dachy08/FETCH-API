"use client"

import { useState } from "react"
import "../styles/Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>TechStore</h1>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button className="search-btn">🔍</button>
        </div>

        <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Products</a>
          </li>
          <li className="nav-item">
            <a href="#">Deals</a>
          </li>
          <li className="nav-item">
            <a href="#">Support</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="nav-icons">
          <a href="#" className="icon">
            👤
          </a>
          <a href="#" className="icon">
            ❤️
          </a>
          <a href="#" className="icon">
            🛒
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
