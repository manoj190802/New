import React from 'react'
import { useCart } from '../CartContext'
import styles from './Linen.module.css'
import { useNavigate } from 'react-router-dom'

// Importing images from the assets folder
import linen2 from '../../Assets/Linenproduct/image copy.png'
import linen3 from '../../Assets/Linenproduct/image copy 2.png'
import linen4 from '../../Assets/Linenproduct/image copy 4.png'
import linen5 from '../../Assets/Linenproduct/image copy 5.png'
import linen6 from '../../Assets/Linenproduct/image copy 6.png'
import linen7 from '../../Assets/Linenproduct/image copy 7.png'
import linen8 from '../../Assets/Linenproduct/image copy 8.png'
import linen9 from '../../Assets/Linenproduct/image copy 9.png'
import linen10 from '../../Assets/Linenproduct/image copy 10.png'
import linen11 from '../../Assets/Linenproduct/image copy 11.png'
import linen12 from '../../Assets/Linenproduct/image copy 12.png'
import linen13 from '../../Assets/Linenproduct/image copy 13.png'
import linen14 from '../../Assets/Linenproduct/image copy 14.png'
import linen15 from '../../Assets/Linenproduct/image copy 15.png'
import linen16 from '../../Assets/Linenproduct/image copy 16.png'
import linen17 from '../../Assets/Linenproduct/image copy 17.png'
import linen18 from '../../Assets/Linenproduct/image copy 18.png'
import linen19 from '../../Assets/Linenproduct/image copy 19.png'
import linen20 from '../../Assets/Linenproduct/image copy 20.png'
import linen21 from '../../Assets/Linenproduct/image copy 21.png'
import linen22 from '../../Assets/Linenproduct/image copy 22.png'
import linen23 from '../../Assets/Linenproduct/image copy 23.png'
import linen24 from '../../Assets/Linenproduct/image copy 24.png'
import linen25 from '../../Assets/Linenproduct/image copy 25.png'
import linen26 from '../../Assets/Linenproduct/image copy 26.png'

export default function Linen() {
  const { addToCart, wishlistItems, toggleWishlist } = useCart();
  const navigate = useNavigate();

  const linenProducts = [
    { id: 'l2', img: linen2, name: 'Linen Blend Shirt', price: '₹1299', category: 'Linen Collection' },
    { id: 'l3', img: linen3, name: 'Casual Summer Shirt', price: '₹899', category: 'Linen Collection' },
    { id: 'l4', img: linen4, name: 'Striped Linen Top', price: '₹1100', category: 'Linen Collection' },
    { id: 'l5', img: linen5, name: 'Classic White Linen', price: '₹1499', category: 'Linen Collection' },
    { id: 'l6', img: linen6, name: 'Breezy Linen Shirt', price: '₹999', category: 'Linen Collection' },
    { id: 'l7', img: linen7, name: 'Structured Linen Tee', price: '₹799', category: 'Linen Collection' },
    { id: 'l8', img: linen8, name: 'Minimalist Linen', price: '₹1200', category: 'Linen Collection' },
    { id: 'l9', img: linen9, name: 'Everyday Linen Tee', price: '₹599', category: 'Linen Collection' },
    { id: 'l10', img: linen10, name: 'Linen Comfort Pant', price: '₹1599', category: 'Linen Collection' },
    { id: 'l11', img: linen11, name: 'Classic Linen Polo', price: '₹1099', category: 'Linen Collection' },
    { id: 'l12', img: linen12, name: 'Premium Linen Blend', price: '₹1399', category: 'Linen Collection' },
    { id: 'l13', img: linen13, name: 'Summer Linen Shirt', price: '₹1150', category: 'Linen Collection' },
    { id: 'l14', img: linen14, name: 'Lightweight Linen', price: '₹950', category: 'Linen Collection' },
    { id: 'l15', img: linen15, name: 'Linen Comfort Shorts', price: '₹799', category: 'Linen Collection' },
    { id: 'l16', img: linen16, name: 'Linen Mandarin Collar', price: '₹1250', category: 'Linen Collection' },
    { id: 'l17', img: linen17, name: 'Relaxed Fit Linen', price: '₹1450', category: 'Linen Collection' },
    { id: 'l18', img: linen18, name: 'Casual Linen Top', price: '₹850', category: 'Linen Collection' },
    { id: 'l19', img: linen19, name: 'Tailored Linen Shirt', price: '₹1600', category: 'Linen Collection' },
    { id: 'l20', img: linen20, name: 'Linen Beach Wear', price: '₹1050', category: 'Linen Collection' },
    { id: 'l21', img: linen21, name: 'Soft Linen Blend', price: '₹999', category: 'Linen Collection' },
    { id: 'l22', img: linen22, name: 'Premium Linen Pant', price: '₹1800', category: 'Linen Collection' },
    { id: 'l23', img: linen23, name: 'Classic Linen Shirt', price: '₹1300', category: 'Linen Collection' },
    { id: 'l24', img: linen24, name: 'Linen Casual Trouser', price: '₹1750', category: 'Linen Collection' },
    { id: 'l25', img: linen25, name: 'Linen Evening Shirt', price: '₹1550', category: 'Linen Collection' },
    { id: 'l26', img: linen26, name: 'Linen Signature Edition', price: '₹1999', category: 'Linen Collection' },
  ];

  const checkWishlist = (id) => {
    return wishlistItems?.find(item => item.id === id);
  };

  return (
    <div className={styles.linenPage}>
      <h2 className={styles.sectionTitle}>Linen Story Collection</h2>
      
      <div className={styles.productGrid}>
        {linenProducts.map((item) => (
          <div key={item.id} className={styles.linenCard}>
            <div className={styles.imageWrapper}>
              <img src={item.img} alt={item.name} className={styles.productImg} />
              <button 
                className={styles.wishlistBtn}
                onClick={() => toggleWishlist(item)}
                style={{color: checkWishlist(item.id) ? '#ff4d4d' : '#888'}}
              >
                {checkWishlist(item.id) ? '♥' : '♡'}
              </button>
            </div>
            
            <div className={styles.productDetails}>
              <h3 className={styles.productName}>{item.name}</h3>
              <p className={styles.categoryText}>{item.category}</p>
              <p className={styles.productPrice}>{item.price}</p>
              
              <button 
                className={styles.addBtn}
                onClick={() => addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.img
                })}
              >
                Add to Bag
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
