import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Products.css';

const Products = () => (
  <section className="products-section" id="products">
    <div className="products-container">
      <div className="section-header">
        <h2 className="section-title">
          Featured <span className="highlight">Products</span>
        </h2>
        <p className="section-subtitle">End-to-end IT hardware solutions for enterprises of every size</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-img-wrap">
              <img src={product.img} alt={product.title} className="product-img" />
              <span className="product-tag">{product.tag}</span>
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.desc}</p>
              <Link to={`/product/${product.id}`} className="btn-view-details">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
