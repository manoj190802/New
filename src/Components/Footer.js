import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Subscribe Section */}
      <div className="footer-top">
        <div>
          <h2>Subscribe to our awesome emails.</h2>
          <p>Get our latest offers and news straight in your inbox.</p>

          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-links">

        <div className="footer-column">
          <h4>Women</h4>
          <ul>
            <li>Tops</li>
            <li>Dresses & Jumpsuits</li>
            <li>Sportswear</li>
            <li>Bottoms</li>
            <li>Winterwear</li>
            <li>Ethnicwear</li>
            <li>Lingerie</li>
            <li>Sleepwear</li>
            <li>Accessories</li>
            <li>Shoes</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Men</h4>
          <ul>
            <li>Tops</li>
            <li>Bottoms</li>
            <li>Sportswear</li>
            <li>Winterwear</li>
            <li>Accessories</li>
            <li>Shoes</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Sneakers</h4>
          <ul>
            <li>New Arrivals</li>
            <li>Tops</li>
            <li>Dresses</li>
            <li>Shorts</li>
            <li>Shirts</li>
            <li>Trousers</li>
            <li>T-Shirts</li>
            <li>Shorts & Skirts</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>Offers</li>
            <li>Stores Nearby</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 MEN IN BLACK. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;