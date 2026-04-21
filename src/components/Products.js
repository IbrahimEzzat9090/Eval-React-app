import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';

// Move mock data outside to maintain consistency during filtering
export const allProducts = Array.from({ length: 12 }, (_, i) => {
  const category = i % 3 === 0 ? 'Essentials' : (i % 3 === 1 ? 'Lifestyle' : 'Tech');
  const productId = i + 1;
  
  // Assign image paths for all categories based on category name and index (1-4)
  const categoryKey = category.toLowerCase();
  const imageNumber = Math.floor(i / 3) + 1;
  const imagePath = `${process.env.PUBLIC_URL}/images/${categoryKey}-${imageNumber}.jpg`;
  
  const productNames = {
    1: "Dettol",
    2: "Dior : Sunglass",
    3: "logi-Tech Headset",
    4: "Persil PowerGel",
    5: "POLO Black T-Shirt XL",
    6: "PS5 Controller",
    7: "Dishwasher",
    8: "Gucci Bag",
    9: "HP Printer",
    10: "Cat Food",
    11: "DG running shoes",
    12: "Samsung 4K TV"
  };

  return {
    id: productId,
    name: productNames[productId] || `Modern Product ${productId}`,
    price: parseFloat((Math.random() * 150 + 10).toFixed(2)),
    category: category,
    image: imagePath,
    description: `This is a high-quality ${category.toLowerCase()} item designed for modern living. It offers exceptional performance and style for your everyday needs.`
  };
});

export const Products = () => {
  useEffect(() => {
    document.title = "Eval App | Our Products";
  }, []);

  const fallbackImage = `${process.env.PUBLIC_URL}/images/no-image.jpg`;
  const handleImageError = useCallback((e) => {
    e.target.src = fallbackImage;
  }, [fallbackImage]);

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedCategories, setSelectedCategories] = useState(['All']);
  const [priceRange, setPriceRange] = useState('all');

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setSelectedCategories(['All']);
      return;
    }

    let newCategories = selectedCategories.includes('All') 
      ? [category] 
      : (selectedCategories.includes(category) 
          ? selectedCategories.filter(c => c !== category) 
          : [...selectedCategories, category]);
    
    if (newCategories.length === 0) newCategories = ['All'];
    setSelectedCategories(newCategories);
  };

  // Use useMemo to re-filter products only when dependencies change
  const memoizedFilteredProducts = useMemo(() => {
    let currentResult = allProducts;

    // Filter by Category
    if (!selectedCategories.includes('All')) {
      currentResult = currentResult.filter(p => selectedCategories.includes(p.category));
    }

    // Filter by Price
    if (priceRange !== 'all') {
      if (priceRange === 'under50') currentResult = currentResult.filter(p => p.price < 50);
      else if (priceRange === '50-100') currentResult = currentResult.filter(p => p.price >= 50 && p.price <= 100);
      else if (priceRange === 'over100') currentResult = currentResult.filter(p => p.price > 100);
    }
    return currentResult;
  }, [selectedCategories, priceRange]); // Dependencies for useMemo

  // Update the state with the memoized filtered products
  useEffect(() => { setFilteredProducts(memoizedFilteredProducts); }, [memoizedFilteredProducts]);

  return (
    <div className="products-page-container">
      <aside className="filters-sidebar">
        <div className="filter-group">
          <h3>Category</h3>
          <ul>
            {['All', 'Essentials', 'Lifestyle', 'Tech'].map(cat => (
              <li key={cat}>
                <label>
                  <input 
                    type="checkbox" 
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                  /> {cat}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-group">
          <h3>Price Range</h3>
          <ul>
            <li><label><input type="radio" name="price" checked={priceRange === 'all'} onChange={() => setPriceRange('all')} /> All Prices</label></li>
            <li><label><input type="radio" name="price" checked={priceRange === 'under50'} onChange={() => setPriceRange('under50')} /> Under $50</label></li>
            <li><label><input type="radio" name="price" checked={priceRange === '50-100'} onChange={() => setPriceRange('50-100')} /> $50 - $100</label></li>
            <li><label><input type="radio" name="price" checked={priceRange === 'over100'} onChange={() => setPriceRange('over100')} /> Over $100</label></li>
          </ul>
        </div>
      </aside>

      <main className="products-main">
        <header className="products-header">
          <h2>All Products</h2>
          <p>{filteredProducts.length} items found</p>
        </header>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              {/* 
                  Ensure your images in public/images/ are named exactly:
                  category-number.jpg (e.g., essentials-1.jpg, lifestyle-2.jpg)
                  (Check if they are .png or .jpeg instead!)
              */}
              {product.image ? (
                <img src={product.image} alt={product.name} className="product-image" onError={handleImageError} />
              ) : (
                <div className="product-image-placeholder"></div>
              )}
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="category-label">{product.category}</p>
                <p className="price">${product.price.toFixed(2)}</p>
                <Link to={`/products/${product.id}`} className="details-button">Product Details</Link>
              </div>
            </div>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="no-results">
            <p>No products match your current filters.</p>
            <button onClick={() => {
              setFilteredProducts(allProducts);
              setSelectedCategories(['All']);
              setPriceRange('all');
            }}>Reset Filters</button>
          </div>
        )}
      </main>
    </div>
  )
}
