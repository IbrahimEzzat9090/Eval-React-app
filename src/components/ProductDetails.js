import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from './Products';

export const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (product) {
      document.title = `Eval App | ${product.name}`;
    } else {
      document.title = `Eval App | Product Not Found`;
    }
  }, [product]);

  if (!product) {
    return <div className="no-results">Product not found.</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details-content">
        <div className="details-image-section">
          {product.image ? (
            <img src={product.image} alt={product.name} className="large-product-image" />
          ) : (
            <div className="product-image-placeholder large"></div>
          )}
        </div>
        <div className="details-info-section">
          <p className="category-tag">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="details-price">${product.price.toFixed(2)}</p>
          <p className="details-description">{product.description}</p>
          <Link to="/products" className="back-button">← Back to Products</Link>
        </div>
      </div>
    </div>
  );
};
