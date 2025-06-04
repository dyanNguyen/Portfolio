import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        <div className="item">🌐 Website Redesign</div>
        <div className="item">📱 Mobile App UI</div>
        <div className="item">📊 Dashboard UI</div>
      </div>
    </section>
  );
};

export default Portfolio;
