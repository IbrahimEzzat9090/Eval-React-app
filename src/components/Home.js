import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { allProducts } from './Products'

export const Home = () => {
  useEffect(() => {
    document.title = "Eval App | Home";
  }, []);

  const featuredIds = [6, 8, 3];
  const featuredProducts = featuredIds
    .map(id => allProducts.find(p => p.id === id))
    .filter(Boolean);

  return (
    <div className="home-container">
      <header className="hero">
        <h1>Premium Quality. <br />Modern Design.</h1>
        <p>Explore our curated collection of essentials for the modern lifestyle.</p>
        <Link to="/products" className="cta-button">Shop Collection</Link>
      </header>

      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              {product.image ? (
                <img src={product.image} alt={product.name} className="product-image" />
              ) : (
                <div className="product-image-placeholder"></div>
              )}
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
                <Link to={`/products/${product.id}`} className="details-button">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="highlights">
        <div className="highlight-item">
          <span className="icon">🚚</span>
          <h3>Free Shipping</h3>
          <p>On all orders over $100</p>
        </div>
        <div className="highlight-item">
          <span className="icon">🛡️</span>
          <h3>Secure Checkout</h3>
          <p>SSL encrypted payments</p>
        </div>
        <div className="highlight-item">
          <span className="icon">♻️</span>
          <h3>Sustainable</h3>
          <p>Eco-friendly packaging</p>
        </div>
      </section>
    </div>
  )
}
