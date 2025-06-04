import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required className="box"/>
        <input type="email" placeholder="Your Email" required className="box"/>
        <textarea rows="4" placeholder="Message" className="box"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Resume;
