import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

import './Notification.css';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationProduct, setNotificationProduct] = useState(null);
  const [fadeNotification, setFadeNotification] = useState(false);
  const fadeTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  // Load cart and wishlist from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart from local storage", e);
      }
    }
    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist));
      } catch (e) {
        console.error("Failed to parse wishlist from local storage", e);
      }
    }
  }, []);

  // Save cart and wishlist to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

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
    setNotificationProduct(product);
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

  const toggleWishlist = (product) => {
    setWishlistItems(prevItems => {
      const exists = prevItems.find(item => item.id === product.id);
      if (exists) {
        return prevItems.filter(item => item.id !== product.id);
      }
      return [...prevItems, product];
    });
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
      cartCount,
      wishlistItems,
      toggleWishlist
    }}>
      {children}
      {showNotification && notificationProduct && (
        <div className="notification-container">
          <div className={`notification ${fadeNotification ? 'fade-out' : ''}`}>
            {notificationProduct.image && (
              <img src={notificationProduct.image} alt={notificationProduct.name} style={{width: '40px', height: '40px', borderRadius: '6px', objectFit: 'cover'}} />
            )}
            <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <span className="notification-icon">✓</span>
                <span style={{fontWeight: '600'}}>Added to bag</span>
              </div>
              <span style={{fontSize: '0.85rem', color: '#aaa', fontWeight: '400'}}>{notificationProduct.name}</span>
            </div>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
};
