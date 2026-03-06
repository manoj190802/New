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


const Datas = [
  {
    img: activewear,
    title: '₹599',
    content: 'Men Solid Athleisure Joggers'
  },

  {
    img: activewear2,
    title: '₹599',
    content: 'Men Solid Athleisure Joggers'
  },
  {
    img: activewear3,
    title: '₹499',
    content: 'Men Solid Athleisure Shorts'
  },
  {
    img: activewear4,
    title: '₹599',
    content: 'Men Solid Athleisure Track Pants'
  },
  {
    img: activewear5,
    title: '₹499',
    content: 'Men Solid Athleisure Shorts'
  },
  {
    img: activewear6,
    title: '₹499',
    content: 'Men Solid Athleisure Shorts'
  },
  {
    img: activewear7,
    title: '₹599',
    content: 'Men Solid Athleisure Joggers'
  },
  {
    img: activewear8,
    title: '₹399',
    content: 'Men Slim Fit Solid Athleisure T-shirt'
  },
  {
    img: activewear9,
    title: '₹599',
    content: 'Men Solid Athleisure Track Pants'
  },
  {
    img: activewear10,
    title: '₹399',
    content: 'URB_N Men Colourblocked T-shirt'
  },
  {
    img: activewear11,
    title: '₹599',
    content: 'Men Solid Athleisure Joggers'
  },
  {
    img: activewear12,
    title: '₹599',
    content: 'Men Solid Athleisure Joggers'
  },
  {
    img: activewear13,
    title: '₹599',
    content: 'Men NFL Printed Sports T-shirt'
  },
  {
    img: activewear14,
    title: '₹599',
    content: 'Men Side Stripes Sports Track Pants'
  },
  {
    img: activewear15,
    title: '₹599',
    content: 'Men Colourblock Sports T-shirt'
  },
  {
    img: activewear16,
    title: '₹599',
    content: 'Men Side Stripes Sports Track Pants'
  },
  {
    img: activewear17,
    title: '₹599',
    content: 'Men Typography Print Sports T-shirt'
  },
  {
    img: activewear18,
    title: '₹399',
    content: 'Men Striped Slim Fit Sports Shorts'
  },
  {
    img: activewear19,
    title: '₹599',
    content: 'Men Solid Athleisure Track Pants'
  },
  {
    img: activewear20,
    title: '₹399',
    content: 'Men Printed Sports T-shirt'
  },
  {
    img: activewear21,
    title: '₹399',
    content: 'Men Side Stripes Sports T-shirt'
  },
  {
    img: activewear22,
    title: '₹399',
    content: 'Men Printed Athleisure T-shirt'
  },
  {
    img: activewear23,
    title: '₹499',
    content: 'Men Side Stripes Sports T-shirt'
  },
  {
    img: activewear24,
    title: '₹499',
    content: 'Men NFL Printed Sports T-shirt'
  },
  {
    img: activewear25,
    title: '₹499',
    content: 'Men Printed Athleisure T-shirt'
  },
  {
    img: activewear26,
    title: '₹599',
    content: 'Men Printed Sports T-shirt'
  },
  {
    img: activewear27,
    title: '₹599',
    content: 'URB_N Men Colourblocked T-shirt'
  },
  {
    img: activewear28,
    title: '₹499',
    content: 'Men Checked Oversized Sports Shirt'
  },
  {
    img: activewear29,
    title: '₹499',
    content: 'Men Typography Print Sports T-shirt'
  },

]
export default function Activewear() {
  return (
    <div>
      <h3 className={styles.button2} >Shop For:</h3>
      <button className={styles.button1}>Tops</button>
      <button className={styles.button1}>Bottoms</button>
      <div className={styles.actimg}>

        {/*  Map Function */}
        {Datas.map((item) => (
          <div className={styles.actcate} >
            <img className='' src={item.img} alt="" width={300} />
            <h1>{item.title}</h1>
            <h3>{item.content}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
