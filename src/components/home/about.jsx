import React from "react";
import "./about.css"; 

const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT TEXT */}
        <div className="about-text">
          <h2>About H<sub>2</sub>O The Men's Salon</h2>
          <p>
            Welcome to our premium men's grooming salon where style meets comfort.
            We offer professional haircuts, skincare, beard styling, massage therapy,
            and grooming services designed exclusively for men.
          </p>

          <p>
            With expert barbers, high-quality products, and a relaxing environment,
            we ensure a refreshing experience every time you visit.
          </p>

          <button className="about-btn">Explore Our Services</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
          <img src="/images/about.jpg" alt="Men Salon" />
        </div>

      </div>
    </section>
  );
};

export default About;

