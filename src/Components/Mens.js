
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Mens.css'
import menoffer1 from '../Assets/menoffer1.png'
import hero1 from '../Assets/hero1.png'

import img1 from '../Assets/cart1.png'
import img2 from '../Assets/cart2.png'
import img3 from '../Assets/cart3.png'
import img4 from '../Assets/cart4.png'

import Freedelimg from '../Assets/Freedelimg.png'
import hero4 from '../Assets/hero4.png'
import hero5 from '../Assets/hero5.png'

import img5 from '../Assets/cart5.png'
import img6 from '../Assets/cart6.png'
import img7 from '../Assets/cart7.png'
import img8 from '../Assets/cart8.png'

import hero6 from '../Assets/hero6.png'
import hero7 from '../Assets/hero7.png'

import img9 from '../Assets/cart9.png'
import img10 from '../Assets/cart10.png'
import img11 from '../Assets/cart11.png'
import img12 from '../Assets/cart12.png'

import menImg from '../Assets/shopmen.png'
import womenImg from '../Assets/shopwomen.png'
import sneakersImg from '../Assets/shopsneakers.png'

import giftimg from '../Assets/giftimg.png'
// import Datass from "../Components/Data/package.json"



import { useCart } from './CartContext'

export default function Mens() {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const menCate = () => {
    navigate("/Mencate")
  }

  const Activewear =()=> {
    navigate("/Activewear")
  }

  const casualLoveItems = [
    { id: 'm1', img: img1, name: 'Premium Cotton Tee', price: '₹499' },
    { id: 'm2', img: img2, name: 'Slim Fit Chinos', price: '₹1299' },
    { id: 'm3', img: img3, name: 'Linen Casual Shirt', price: '₹799' },
    { id: 'm4', img: img4, name: 'Striped Polo', price: '₹899' },
  ];

  const styleSpotlightItems = [
    { id: 'm5', img: img5, name: 'Bomber Jacket', price: '₹2499' },
    { id: 'm6', img: img6, name: 'Graphic Sweatshirt', price: '₹1499' },
    { id: 'm7', img: img7, name: 'Knit Pullover', price: '₹1799' },
    { id: 'm8', img: img8, name: 'Corduroy Overcoat', price: '₹3499' },
  ];

  const bottomsUpItems = [
    { id: 'm9', img: img9, name: 'Utility Cargo Pants', price: '₹1599' },
    { id: 'm10', img: img10, name: 'Stretch Denim Jeans', price: '₹1999' },
    { id: 'm11', img: img11, name: 'Athletic Joggers', price: '₹1199' },
    { id: 'm12', img: img12, name: 'Formal Trousers', price: '₹1499' },
  ];

  return (
    <div className='body mens-page'>
      <img className='hero1' src={hero1} onClick={menCate} alt="Featured" />
      <img className='menoffer1' src={menoffer1} alt="Offer" />

      <section className="product-section">
        <h1 className='CasualLove'>Casual Love</h1>
        <div className='product-grid'>
          {casualLoveItems.map((item) => (
            <div key={item.id} className='product-card'>
               <img src={item.img} alt={item.name} />
               <div className="product-info">
                 <h3>{item.name}</h3>
                 <p>{item.price}</p>
                 <button onClick={() => addToCart({
                   id: item.id,
                   name: item.name,
                   price: item.price,
                   image: item.img
                 })}>Add to Bag</button>
               </div>
            </div>
          ))}
        </div>
      </section>

      <img className='freedelimg' src={Freedelimg} alt="Free Delivery" />

      <h1 className='CasualLove'>Activewear Edit</h1>
      <img className='hero4 clickable' src={hero4} onClick={Activewear} alt="Activewear" />

      <h1 className='CasualLove'>Lounge mode: On</h1>
      <img className='hero4' src={hero5} alt="Lounge" />

      <section className="product-section">
        <h1 className='CasualLove'>Style Spotlight</h1>
        <div className='product-grid'>
          {styleSpotlightItems.map((item) => (
             <div key={item.id} className='product-card'>
                <img src={item.img} alt={item.name} />
                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button onClick={() => addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.img
                  })}>Add to Bag</button>
                </div>
             </div>
          ))}
        </div>
      </section>

      <img className='hero6' src={hero6} alt="Exclusives" />
      <img className='hero7' src={hero7} alt="Exclusives" />

      <section className="product-section">
        <h1 className='CasualLove'>Bottoms Up: Style Edition</h1>
        <div className='product-grid'>
          {bottomsUpItems.map((item) => (
             <div key={item.id} className='product-card'>
                <img src={item.img} alt={item.name} />
                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button onClick={() => addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.img
                  })}>Add to Bag</button>
                </div>
             </div>
          ))}
        </div>
      </section>

      <img className='giftimg' src={giftimg} alt="Gift" />

      <h1 className='CasualLove'>Explore More</h1>
      <div className='explore-grid'>
          <img src={menImg} alt="Shop Men" />
          <img src={womenImg} alt="Shop Women" />
          <img src={sneakersImg} alt="Shop Sneakers" />
      </div>
    </div>
  );
}