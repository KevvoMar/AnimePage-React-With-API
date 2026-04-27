import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
  <h3 className="footer-title">Quick Links</h3>

  <ul className="footer-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/profile">Profile</Link></li>
  </ul>

  <p className="footer-copy">© 2026 Ultra Anime — Built by Kev</p>
</footer>

    )
}

export default Footer
