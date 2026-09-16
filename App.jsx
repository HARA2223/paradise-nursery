import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  const handleGoHome = () => {
    setShowProducts(false);
  };

  if (showProducts) {
    return <ProductList onHomeClick={handleGoHome} />;
  }

  return (
    <div className="landing-page">
      <div className="landing-page__hero">
        <div className="landing-page__overlay">
          <h1 className="landing-page__title">Paradise Nursery</h1>
          <p className="landing-page__tagline">
            Where Green Meets Serenity — bring nature's calm into every room
            of your home.
          </p>
          <button className="landing-page__cta" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
      <AboutUs />
    </div>
  );
}

export default App;
