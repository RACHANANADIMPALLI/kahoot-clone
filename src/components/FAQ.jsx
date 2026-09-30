import React from "react";

function FAQ() {
  return (
    <section className="faq" id="faq">
      <h2>Frequently asked questions</h2>

      <details>
        <summary>What is Kahoot!?</summary>
        <p>
          Kahoot! is a game-based learning platform that makes
          learning engaging through quizzes, games and interactive
          experiences.
        </p>
      </details>

      <details>
        <summary>How does Kahoot! work?</summary>
        <p>
          A host creates or chooses a game and players join using
          their own devices. Questions are displayed and players
          answer interactively.
        </p>
      </details>

      <details>
        <summary>Can I create my own Kahoot?</summary>
        <p>
          Yes. You can create your own quizzes by adding questions,
          answers, images and other interactive content.
        </p>
      </details>

      <details>
        <summary>Can children use Kahoot!?</summary>
        <p>
          Yes. Kahoot! can be used for children, students,
          families and different learning environments.
        </p>
      </details>

      <details>
        <summary>Can Kahoot! be used outside school?</summary>
        <p>
          Yes. Kahoot! can also be used for family activities,
          workplace training, presentations, events and social
          gatherings.
        </p>
      </details>
    </section>
  );
}

export default FAQ;