import React from "react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <span className="about-label">ABOUT KAHOOT!</span>

          <h2>Make learning awesome</h2>

          <p>
            Kahoot! makes learning fun, interactive and engaging
            for everyone.
          </p>

          <p>
            Create quizzes, play games and learn together.
          </p>

          <button>Learn more</button>
        </div>

        <div className="about-visual">
          <div className="about-card">
            <h3>Learn</h3>
            <p>Learn through interactive experiences.</p>
          </div>

          <div className="about-card">
            <h3>Play</h3>
            <p>Make learning fun through games.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;