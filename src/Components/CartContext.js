import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

import './Notification.css';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [fadeNotification, setFadeNotification] = useState(false);
  const fadeTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart from local storage", e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    // Clear any existing timeouts to reset the notification timer
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

    // Trigger notification
    setShowNotification(true);
    setFadeNotification(false);

    // After 2.5s start fading out, after 3s completely hide
    fadeTimeoutRef.current = setTimeout(() => {
      setFadeNotification(true);
    }, 2500);

    hideTimeoutRef.current = setTimeout(() => {
      setShowNotification(false);
      setFadeNotification(false);
    }, 3000);
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + (parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}
      {showNotification && (
        <div className="notification-container">
          <div className={`notification ${fadeNotification ? 'fade-out' : ''}`}>
            <span className="notification-icon">✓</span>
            Successfully added to bag
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
};
