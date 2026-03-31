import React from 'react';
import { useCart } from './CartContext';
import styles from './Activewear/Activewear.module.css'; // Borrowing grid styles
// Using placeholders or assets if available, but let's use some general images.
import card1 from '../Assets/Women/card1.png';
import card2 from '../Assets/Women/card2.png';
import card3 from '../Assets/Women/card3.png';
import card4 from '../Assets/Women/card4.png';

export default function WomenCate() {
  const { addToCart } = useCart();
  
  const products = [
    { id: 'wc1', name: 'Cotton Summer Dress', price: '₹1499', image: card1 },
    { id: 'wc2', name: 'Floral Print Maxi', price: '₹1999', image: card2 },
    { id: 'wc3', name: 'Linen Casual Shirt', price: '₹899', image: card3 },
    { id: 'wc4', name: 'Silk Cocktail Dress', price: '₹2499', image: card4 }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.button2}>Shop Our Collection</h1>
      <div className={styles.productGrid}>
        {products.map((item) => (
          <div key={item.id} className={styles.productCard}>
            <div className={styles.imgWrapper}>
              <img src={item.image} alt={item.name} />
            </div>
            <div className={styles.info}>
              <h1>{item.price}</h1>
              <h3>{item.name}</h3>
              <button 
                className={styles.addBtn}
                onClick={() => addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image
                })}
              >
                Add to Bag
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
