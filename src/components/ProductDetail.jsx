import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import Navbar from './Navbar';
import Footer from './Footer';
import './ProductDetail.css';

const tabs = ['Details', 'Additional', 'Custom'];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Details');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pd-not-found">
        <p>Product not found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const tabContent = {
    Details: product.details,
    Additional: product.additional,
    Custom: product.custom,
  };

  return (
    <>
      <Navbar />
      <div className="pd-page">
        <div className="pd-container">

          {/* Back link */}
          <button className="pd-back" onClick={() => navigate(-1)}>
            &#8592; Back to Products
          </button>

          {/* Top card: image + info */}
          <div className="pd-top-card">
            <div className="pd-img-box">
              <img src={product.img} alt={product.title} className="pd-img" />
            </div>
            <div className="pd-info">
              <h1 className="pd-title">{product.title}</h1>
              <p className="pd-desc">{product.desc}</p>
              <hr className="pd-divider" />
              <p className="pd-availability">
                Availability: <span className="pd-stock">In Stock</span>
              </p>
              <hr className="pd-divider" />
            </div>
          </div>

          {/* Tabs section */}
          <div className="pd-tabs-section">
            <div className="pd-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`pd-tab ${activeTab === tab ? 'pd-tab-active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="pd-tab-bar" />
            <div className="pd-tab-content">
              <p>{tabContent[activeTab]}</p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
