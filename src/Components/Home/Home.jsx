import React from "react";
import "./Home.css";
import { Typewriter } from 'react-simple-typewriter';
import avatar from "../../img/avatar.png";

const Home = () => (
  <section id="home" className="home-section">
      <div className="home-left">
        <h1>Hello, my name is <span className="highlight">Nguyen Le Danh</span></h1>
        <h2>I’m a 
          <span className="typed" style={{marginLeft:10, fontWeight: 700, color: '#ff4b5c' }}>
            <Typewriter
              words={['Web Designer', 'React Developer', 'Game Developer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p>I create and design websites with great UX/UI.</p>
        <button className="btn"><a href="/CV-NguyenLeDanh.pdf" download className="download-btn">Download CV</a></button>
      </div>
      <div className="home-right">
        <img src={avatar} alt="avatar" />
      </div>
    </section>
);

export default Home;
