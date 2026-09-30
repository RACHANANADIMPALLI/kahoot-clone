import React from "react";

function Navbar() {
  return (
    <nav>
      <h1>kahoot!</h1>

      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#download">Download</a>
        <a href="#faq">FAQ</a>
      </div>

      <div>
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;