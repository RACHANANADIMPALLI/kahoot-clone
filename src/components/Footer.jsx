import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        kahoot!
      </div>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#download">Download</a>
        <a href="#faq">FAQ</a>
      </div>

      <div className="footer-social">
        <span>Facebook</span>
        <span>Instagram</span>
        <span>YouTube</span>
        <span>Twitter</span>
      </div>

      <p>
        © 2026 Kahoot Clone. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;