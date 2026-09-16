import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us" id="about-us">
      <div className="about-us__content">
        <h2>About Paradise Nursery</h2>
        <p>
          Paradise Nursery started as a single greenhouse with a simple idea:
          bringing thriving, easy-to-love plants into every home, no matter
          how much (or little) of a green thumb the owner has. Today we grow
          and hand-pick houseplants across three collections — air purifying,
          aromatic, and low-maintenance — so there's something for every
          space and every level of plant-care confidence.
        </p>
        <p>
          Every plant we ship is nurtured on-site by our small team of
          horticulturists, inspected for health before it leaves the
          greenhouse, and packed with a care card so it settles into its new
          home without stress. We believe a home filled with living plants is
          a calmer, healthier home — and we're here to make that easy.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
