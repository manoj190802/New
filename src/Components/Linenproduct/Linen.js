import React from 'react'
import { useCart } from '../CartContext'
import styles from './Linen.module.css'
import { useNavigate } from 'react-router-dom'

// Importing images from the assets folder
import linen1 from '../../Assets/Linenproduct/image.png'
import linen2 from '../../Assets/Linenproduct/image copy.png'
import linen3 from '../../Assets/Linenproduct/image copy 2.png'
import linen4 from '../../Assets/Linenproduct/image copy 4.png'
import linen5 from '../../Assets/Linenproduct/image copy 5.png'
import linen6 from '../../Assets/Linenproduct/image copy 6.png'
import linen7 from '../../Assets/Linenproduct/image copy 7.png'
import linen8 from '../../Assets/Linenproduct/image copy 8.png'

export default function Linen() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const linenProducts = [
    { id: 'l1', img: linen1, name: 'Premium Cotton Tee', price: '₹499' },
    { id: 'l2', img: linen2, name: 'Linen Blend Shirt', price: '₹1299' },
    { id: 'l3', img: linen3, name: 'Casual Summer Shirt', price: '₹899' },
    { id: 'l4', img: linen4, name: 'Striped Linen Top', price: '₹1100' },
    { id: 'l5', img: linen5, name: 'Classic White Linen', price: '₹1499' },
    { id: 'l6', img: linen6, name: 'Breezy Linen Shirt', price: '₹999' },
    { id: 'l7', img: linen7, name: 'Structured Linen Tee', price: '₹799' },
    { id: 'l8', img: linen8, name: 'Minimalist Linen', price: '₹1200' },
  ];

  return (
    <div className={styles.linenPage}>
      <h2 className={styles.sectionTitle}>Casual Love</h2>
      
      <div className={styles.productGrid}>
        {linenProducts.map((item) => (
          <div key={item.id} className={styles.linenCard}>
            <div className={styles.imageWrapper}>
              <img src={item.img} alt={item.name} className={styles.productImg} />
              <div className={styles.banner}>
                LINEN STORY
              </div>
            </div>
            
            <div className={styles.productDetails}>
              <h3 className={styles.productName}>{item.name}</h3>
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
