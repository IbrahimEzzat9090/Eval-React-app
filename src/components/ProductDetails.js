import React, { useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from './Products';

export const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));

  const fallbackImage = `${process.env.PUBLIC_URL}/images/no-image.jpg`;
  const handleImageError = useCallback((e) => {
    e.target.src = fallbackImage;
  }, [fallbackImage]);

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
          {product.image ? ( // Check if product.image exists, then try to load it
            <img src={product.image} alt={product.name} className="large-product-image" onError={handleImageError} />
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
