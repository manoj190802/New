
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



export default function Mens() {

  const navigates = useNavigate()

  const menCate = () => {
    navigates("/Mencate")
   
  }

  const Activewear =()=> {
    navigate("/Activewear")
  }
  
  // 1. Data-va Return-ku mela vinga
  const Datas = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4},

    { img1: img5 },
    { img1: img6 },
    { img1: img7 },
    { img1: img8 },

    { img2: img9 },
    { img2: img10 },
    { img2: img11 },
    { img2: img12 },

    { men: menImg },
    { men: womenImg },
    { men: sneakersImg },


  ];
const navigate = useNavigate()
  return (
    <div className='body'>

      <img className='hero1' src={hero1} onClick={menCate} alt="" />
      <img className='menoffer1' src={menoffer1} alt="" />

      <h1 className='CasualLove'>Casual Love</h1>

      {/*  Map Function */}
      {Datas.map((item, index) => (
        <div className='Carts1'>
          <img className='Cartsa' src={item.img}   alt="" />
          {/* <h1>{item.title}</h1> */}
        </div>
      ))}

      <img className='freedelimg' src={Freedelimg} alt="" />

      <h1 className='CasualLove'>Activewear Edit</h1>
      <img className='hero4' src={hero4} onClick={Activewear} alt="" />

      <h1 className='CasualLove'>Lounge mode: On</h1>
      <img className='hero4' src={hero5} alt="" />

      {/*  Map Function */}
      <h1 className='CasualLove'>Style Spotlight </h1>

      {Datas.map((item) => (
        <div className='Carts2'>
          <img className='Cartse' src={item.img1} alt="" />

        </div>
      ))}

      <h1 className='CasualLove'>Online Exclusives </h1>

      <img className='hero6' src={hero6} alt="" />
      <img className='hero7' src={hero7} alt="" />


      <h1 className='CasualLove'>Bottoms Up: Style Edition </h1>

      {Datas.map((item) => (
        <div className='Carts3'>
          <img className='Cartsi' src={item.img2} alt="" />

        </div>
      ))}
      <img className='giftimg' src={giftimg} alt="" />

      <h1 className='CasualLove'>Explore More </h1>
      {Datas.map((item) => (
        <div className='exploreshopmen'>
          <img className='exploreshopmen' src={item.men} alt="" />


        </div>
      ))}

    </div>

  );




}