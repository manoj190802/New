import React from 'react'
import styles from './Activewear.module.css'
import activewear from '../../Assets/Activewearimg/actimage.png';

import activewear2 from '../../Assets/Activewearimg/actimg1.png';
import activewear3 from '../../Assets/Activewearimg/image copy 2.png';
import activewear4 from '../../Assets/Activewearimg/image copy 3.png';
import activewear5 from '../../Assets/Activewearimg/image copy 4.png';
import activewear6 from '../../Assets/Activewearimg/image copy 5.png';
import activewear7 from '../../Assets/Activewearimg/image copy 6.png';
import activewear8 from '../../Assets/Activewearimg/image copy 7.png';
import activewear9 from '../../Assets/Activewearimg/image copy 8.png';
import activewear10 from '../../Assets/Activewearimg/image copy 9.png';
import activewear11 from '../../Assets/Activewearimg/image copy 10.png';
import activewear12 from '../../Assets/Activewearimg/image copy 11.png';
import activewear13 from '../../Assets/Activewearimg/image copy 12.png';
import activewear14 from '../../Assets/Activewearimg/image copy 13.png';
import activewear15 from '../../Assets/Activewearimg/image copy 14.png';
import activewear16 from '../../Assets/Activewearimg/image copy 15.png';
import activewear17 from '../../Assets/Activewearimg/image copy 16.png';
import activewear18 from '../../Assets/Activewearimg/image copy 17.png';
import activewear19 from '../../Assets/Activewearimg/image copy 18.png';
import activewear20 from '../../Assets/Activewearimg/image copy 19.png';
import activewear21 from '../../Assets/Activewearimg/image copy 20.png';
import activewear22 from '../../Assets/Activewearimg/image copy 21.png';
import activewear23 from '../../Assets/Activewearimg/image copy 22.png';
import activewear24 from '../../Assets/Activewearimg/image copy 23.png';
import activewear25 from '../../Assets/Activewearimg/image copy 24.png';
import activewear26 from '../../Assets/Activewearimg/image copy 25.png';
import activewear27 from '../../Assets/Activewearimg/image copy 26.png';
import activewear28 from '../../Assets/Activewearimg/image copy 27.png';
import activewear29 from '../../Assets/Activewearimg/image copy 28.png';


import { useCart } from '../CartContext';

const Datas = [
  {
    id: 'a1',
    img: activewear,
    price: '₹599',
    name: 'Men Solid Athleisure Joggers'
  },
  {
    id: 'a2',
    img: activewear2,
    price: '₹599',
    name: 'Men Solid Athleisure Joggers'
  },
  {
    id: 'a3',
    img: activewear3,
    price: '₹499',
    name: 'Men Solid Athleisure Shorts'
  },
  {
    id: 'a4',
    img: activewear4,
    price: '₹599',
    name: 'Men Solid Athleisure Track Pants'
  },
  // ... adding more ids to existing ones for demo
  { id: 'a5', img: activewear5, price: '₹499', name: 'Men Solid Athleisure Shorts' },
  { id: 'a6', img: activewear6, price: '₹499', name: 'Men Solid Athleisure Shorts' },
  { id: 'a7', img: activewear7, price: '₹599', name: 'Men Solid Athleisure Joggers' },
  { id: 'a8', img: activewear8, price: '₹399', name: 'Men Slim Fit Solid Athleisure T-shirt' },
  { id: 'a9', img: activewear9, price: '₹599', name: 'Men Solid Athleisure Track Pants' },
  { id: 'a10', img: activewear10, price: '₹399', name: 'URB_N Men Colourblocked T-shirt' },
];

export default function Activewear() {
  const { addToCart } = useCart();

  return (
    <div className={styles.container}>
      <h3 className={styles.button2} >Shop For:</h3>
      <div className={styles.filters}>
        <button className={styles.button1}>Tops</button>
        <button className={styles.button1}>Bottoms</button>
      </div>
      
      <div className={styles.productGrid}>
        {Datas.map((item) => (
          <div key={item.id} className={styles.productCard}>
            <div className={styles.imgWrapper}>
               <img src={item.img} alt={item.name} />
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
                   image: item.img
                 })}
               >
                 Add To Bag
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
