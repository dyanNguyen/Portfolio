import React from "react";
import "./About.css";

const About = () => (
  <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I'm a passionate developer who loves clean code and modern UI/UX. With years of experience building web apps, I bring both design sensibility and technical skill to the table.
      </p>
      <div className="about-cards">
        <div className="card">🎯 Detail-Oriented</div>
        <div className="card">💡 Creative</div>
        <div className="card">🤝 Team Player</div>
      </div>
    </section>
);

export default About;
