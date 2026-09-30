import React from "react";

import createImage from "../assets/create.png";
import hostImage from "../assets/host.png";
import playImage from "../assets/play.png";
import learnImage from "../assets/learn.png";

function Features() {
  return (
    <section className="features" id="features">

      <div className="features-title">
        <h2>Make learning fun, engaging and interactive</h2>
        <p>
          Everything you need to create memorable learning experiences.
        </p>
      </div>

      <div className="feature-list">

        <div className="feature-row">
          <div className="feature-image">
            <img src={createImage} alt="Create" />
          </div>

          <div className="feature-text">
            <h3>Create</h3>
            <p>
              Create fun and engaging quizzes and interactive learning
              experiences.
            </p>
            <button>Learn more</button>
          </div>
        </div>

        <div className="feature-row reverse">
          <div className="feature-image">
            <img src={hostImage} alt="Host" />
          </div>

          <div className="feature-text">
            <h3>Host</h3>
            <p>
              Bring everyone together and host engaging learning sessions.
            </p>
            <button>Learn more</button>
          </div>
        </div>

        <div className="feature-row">
          <div className="feature-image">
            <img src={playImage} alt="Play" />
          </div>

          <div className="feature-text">
            <h3>Play</h3>
            <p>
              Turn learning into an exciting experience with interactive
              games and challenges.
            </p>
            <button>Learn more</button>
          </div>
        </div>

        <div className="feature-row reverse">
          <div className="feature-image">
            <img src={learnImage} alt="Learn" />
          </div>

          <div className="feature-text">
            <h3>Learn</h3>
            <p>
              Stay engaged, practice knowledge and discover something new.
            </p>
            <button>Learn more</button>
          </div>
        </div>

      </div>

      <section className="kids-section">

        <div className="kids-content">
          <span className="kids-label">KAHOOT! FOR KIDS</span>

          <h2>Learning can be fun for everyone</h2>

          <p>
            Give children a fun and engaging way to learn through
            interactive games, quizzes and activities.
          </p>

          <button>Explore for kids</button>
        </div>

        <div className="kids-images">
          <img src={playImage} alt="Kids learning" />
          <img src={learnImage} alt="Kids learning" />
        </div>

      </section>

    </section>
  );
}

export default Features;