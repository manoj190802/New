import React, { useState } from 'react';
import { useCart } from '../CartContext';
import './Checkout.css';

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a server
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <div className="success-icon">✓</div>
        <h1>Thank you for your order!</h1>
        <p>Your order #{Math.floor(Math.random() * 1000000)} has been successfully placed. We've sent an update to {formData.email}.</p>
        <button className="back-btn" onClick={() => window.location.href = '/'}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Secure Checkout</h1>
      
      <div className="checkout-content">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="section">
            <h2>Shipping Information</h2>
            <div className="row">
              <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            </div>
            <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <input name="address" placeholder="Full Address" value={formData.address} onChange={handleChange} required />
            <div className="row">
              <input name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
              <input name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} required />
            </div>
          </div>
          
          <div className="section">
            <h2>Payment Details</h2>
            <input name="cardNumber" placeholder="Card Number (0000 0000 0000 0000)" value={formData.cardNumber} onChange={handleChange} required />
            <div className="row">
              <input name="expiryDate" placeholder="MM/YY" value={formData.expiryDate} onChange={handleChange} required />
              <input name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required />
            </div>
          </div>
          
          <button type="submit" className="submit-order-btn">Pay ₹{cartTotal}</button>
        </form>
        
        <div className="order-summary-sidebar">
          <h3>Your Order</h3>
          <div className="order-summary-items">
            {cartItems.map(item => (
              <div key={item.id} className="summary-item">
                <span>{item.name} x {item.quantity}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
          <hr />
          <div className="total-row">
            <span>Total Amount</span>
            <span>₹{cartTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
