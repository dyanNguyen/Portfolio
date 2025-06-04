import React from "react";
import "./service.css";

const Services = () => {
  return (
    <section id="services" className="service-section">
      <h2>Services</h2>
      <div className="service-list">
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>Modern and clean user interface and experience design.</p>
        </div>
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Building responsive websites with ReactJS and modern tech stack.</p>
        </div>
        <div className="service-card">
          <h3>SEO Optimization</h3>
          <p>Improve your website's visibility and search ranking.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
