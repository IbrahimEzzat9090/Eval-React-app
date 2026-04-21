import React, { useEffect } from 'react'

export const About = () => {
  useEffect(() => {
    document.title = "Eval App | About Us";
  }, []);

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Eval App</h1>
        <p>Crafting quality modern essentials for your daily lifestyle.</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide modern essentials that elevate your daily life. We curate products that 
            combine functionality with aesthetic appeal, ensuring that every item in our store meets our 
            high standards of quality and sustainability.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Curated Quality</h3>
              <p>Every product is hand-picked and tested for durability and performance.</p>
            </div>
            <div className="value-card">
              <h3>Modern Aesthetic</h3>
              <p>We focus on clean lines and minimalist design that fits any lifestyle.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
