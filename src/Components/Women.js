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

export default function Women() {


   const navigate = useNavigate();

   const Cate = () =>{
      navigate("/womencate")
   }

   const Datas = [
    { img: card1 }, 
    { img: card2 },
    { img: card3 },
    { img: card4 },
   
    { img1: Card5 }, 
    { img1: Card6 },
    { img1: Card7 },
    { img1: Card8 },

    { img2: Card11 }, 
    { img2: Card12 },
    { img2: Card13 },
    { img2: Card14 },

    { img3: Card17 }, 
    { img3: Card18 },
    { img3: Card19 },
    { img3: Card20},
   ]
   return(
    <>
        <img className='Banner1' src={Banner} onClick={Cate} alt="" />
        <img className='offer1' src={offer1} alt="" />
           <h1 className='Sleepwear'>Sleepwear Edit</h1>

      {/* map function */}
     { Datas.map((item) => (
        <div className='Card0'>
          <img className='Card1' src={item.img} alt="" />
         
        </div>
      ))}
          <h1 className='Sleepwear'>Casual Love</h1>
             {/* map function */}
     { Datas.map((item) => (
        <div className='Card01'>
          <img className='Card5' src={item.img1} alt="" />
          
        </div>
      ))}
       <img className='freedeli' src={freedeli} alt="" />
        <h1 className='Sleepwear'>Activewear Edit</h1>
         <img className='Banner2' src={Banner2} alt="" />
          <h1 className='Sleepwear'>Twice the Charm: Ethnic & Western</h1>
<div className='twocard'> <img className='Card9' src={Card9} alt="" />
          <img className='Card10' src={Card10} alt="" /></div>
          

           <h1 className='Sleepwear'>Slumber In Style</h1>
            <img className='Banner3' src={Banner3} alt="" />

            <h1 className='Sleepwear'>Ethnic Elegance</h1>
             { Datas.map((item) => (
        <div className='Card02'>
          <img className='Card11' src={item.img2} alt="" />
        
        </div>
      ))}
       <h1 className='Sleepwear'>Online Exclusives</h1>
        <img className='Banner4' src={Banner4} alt="" />
        <img className='Card15' src={Card15} alt="" />
          <img className='Card16' src={Card16} alt="" />

<h1 className='Sleepwear'>Style Spotlight</h1>
            { Datas.map((item) => (
        <div className='Card03'>
          <img className='Card17' src={item.img3} alt="" />
        
        </div>
      ))}
      <h1 className='Sleepwear'>Extras That Pop</h1>
       <img className='Card21' src={Card21} alt="" />
          <img className='Card22' src={Card22} alt="" />

           <h1 className='CasualLove'>Explore More </h1>
        
        <div id='exploreshopwomen'>
            <img id='exploreshopwomen' src={womenImg2} alt="" />
          <img id='exploreshopwomen' src={menImg2} alt="" />
         <img id='exploreshopwomen' src={sneakersImg2} alt="" />
  
        </div>
      
      </>

   )

}
