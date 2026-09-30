import React from "react";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Make learning awesome!</h1>

        <p className="hero-description">
          Create, play and learn with fun, interactive quizzes and games.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get started</button>
          <button className="secondary-btn">Learn more</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Kahoot learning experience" />
      </div>
    </section>
  );
}

export default Hero;