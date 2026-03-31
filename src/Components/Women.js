import React from 'react'
import './Women.css'
import Banner from '../Assets/Women/Banner1.png'
import { useNavigate } from 'react-router-dom'

import offer1 from '../Assets/Women/offer1.png'

import card1 from  '../Assets/Women/card1.png'
import card2 from  '../Assets/Women/card2.png'
import card3 from  '../Assets/Women/card3.png'
import card4 from  '../Assets/Women/card4.png'

import Card5 from  '../Assets/Women/Card5.png'
import Card6 from  '../Assets/Women/Card6.png'
import Card7 from  '../Assets/Women/Card7.png'
import Card8 from  '../Assets/Women/Card8.png'

import Card11 from  '../Assets/Women/Card11.png'
import Card12 from  '../Assets/Women/Card12.png'
import Card13 from  '../Assets/Women/Card13.png'
import Card14 from  '../Assets/Women/Card14.png'

import Card15 from  '../Assets/Women/Card15.png'
import Card16 from  '../Assets/Women/Card16.png'

import Card17 from  '../Assets/Women/Card17.png'
import Card18 from  '../Assets/Women/Card18.png'
import Card19 from  '../Assets/Women/Card19.png'
import Card20 from  '../Assets/Women/Card20.png'

import freedeli from '../Assets/Women/freedeli.png'
import Banner2 from '../Assets/Women/Banner2.png'
import Banner3 from '../Assets/Women/Banner3.png'
import Banner4 from '../Assets/Women/Banner4.png'

import Card9 from  '../Assets/Women/Card9.png'
import Card10 from  '../Assets/Women/Card10.png'

import Card21 from  '../Assets/Women/Card21.png'
import Card22 from  '../Assets/Women/Card22.png'

import menImg2 from '../Assets/Women/shopmen2.png'
import womenImg2 from '../Assets/Women/shopwomen2.png'
import sneakersImg2  from '../Assets/Women/shopsneakers2.png'

import { useCart } from './CartContext'

export default function Women() {
   const navigate = useNavigate();
   const { addToCart } = useCart();

   const Cate = () =>{
      navigate("/womencate")
   }

   const sleepwearProducts = [
    { id: 'w1', img: card1, name: 'Floral Pajama Set', price: '₹899' }, 
    { id: 'w2', img: card2, name: 'Satin Nighty', price: '₹1299' },
    { id: 'w3', img: card3, name: 'Cotton Nightdress', price: '₹799' },
    { id: 'w4', img: card4, name: 'Printed Sleep Shirt', price: '₹599' },
   ];

   const casualProducts = [
    { id: 'w5', img: Card5, name: 'Summer Maxi Dress', price: '₹1499' }, 
    { id: 'w6', img: Card6, name: 'Denim Jacket', price: '₹1899' },
    { id: 'w7', img: Card7, name: 'Graphic T-Shirt', price: '₹499' },
    { id: 'w8', img: Card8, name: 'High-Waist Jeans', price: '₹1299' },
   ];

   return(
    <div className="women-page">
        <img className='Banner1' src={Banner} onClick={Cate} alt="" />
        <img className='offer1' src={offer1} alt="" />
        
        <section className="product-section">
          <h1 className='Sleepwear'>Sleepwear Edit</h1>
          <div className="product-grid">
            {sleepwearProducts.map((item) => (
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

        <img className='freedeli' src={freedeli} alt="" />

        <section className="product-section">
          <h1 className='Sleepwear'>Casual Love</h1>
          <div className="product-grid">
            {casualProducts.map((item) => (
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

        <h1 className='Sleepwear'>Activewear Edit</h1>
        <img className='Banner2' src={Banner2} alt="" />
        
        <h1 className='Sleepwear'>Slumber In Style</h1>
        <img className='Banner3' src={Banner3} alt="" />

        <h1 className='Sleepwear'>Online Exclusives</h1>
        <img className='Banner4' src={Banner4} alt="" />
        
        <div id='exploreshopwomen'>
            <img src={womenImg2} alt="" />
            <img src={menImg2} alt="" />
            <img src={sneakersImg2} alt="" />
        </div>
      </div>
   )
}
