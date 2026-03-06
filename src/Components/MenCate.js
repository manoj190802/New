import React from 'react'
import styles from './MenCate.module.css'

import category1 from '../Assets/MenCate/image1.png'
import category2 from '../Assets/MenCate/image2.png'
import category3 from '../Assets/MenCate/image3.png'
import category4 from '../Assets/MenCate/image4.png'
import category5 from '../Assets/MenCate/image5.png'
import category6 from '../Assets/MenCate/image copy.png'
import category7 from '../Assets/MenCate/image copy 2.png'
import category8 from '../Assets/MenCate/image copy 3.png'
import category9 from '../Assets/MenCate/image copy 4.png'
import category10 from '../Assets/MenCate/image copy 5.png'

import category12 from '../Assets/MenCate/image copy 7.png'
import category13 from '../Assets/MenCate/image copy 8.png'
import category14 from '../Assets/MenCate/image copy 9.png'
import category15 from '../Assets/MenCate/image copy 10.png'
import category16 from '../Assets/MenCate/image copy 11.png'
import category17 from '../Assets/MenCate/image copy 12.png'
import category18 from '../Assets/MenCate/image copy 13.png'
import category19 from '../Assets/MenCate/image copy 14.png'
import category20 from '../Assets/MenCate/image copy 15.png'
import category21 from '../Assets/MenCate/image copy 16.png'
import category22 from '../Assets/MenCate/image copy 17.png'
import category23 from '../Assets/MenCate/image copy 18.png'
import category24 from '../Assets/MenCate/image copy 19.png'
import category25 from '../Assets/MenCate/image copy 20.png'
import category26 from '../Assets/MenCate/image copy 21.png'
import category27 from '../Assets/MenCate/image copy 22.png'
import category28 from '../Assets/MenCate/image copy 23.png'
import category29 from '../Assets/MenCate/image copy 24.png'

import category31 from '../Assets/MenCate/image copy 26.png'
import category32 from '../Assets/MenCate/image copy 27.png'

import category34 from '../Assets/MenCate/image copy 29.png'
import category35 from '../Assets/MenCate/image copy 30.png'
import category36 from '../Assets/MenCate/image copy 31.png'
import category37 from '../Assets/MenCate/image copy 32.png'
import category38 from '../Assets/MenCate/image copy 33.png'
import category39 from '../Assets/MenCate/image copy 34.png'
import category40 from '../Assets/MenCate/image copy 35.png'
import category41 from '../Assets/MenCate/image copy 36.png'
import category42 from '../Assets/MenCate/image copy 37.png'
import category43 from '../Assets/MenCate/image copy 38.png'

export default function MenCate() {
    const Datas = [
      { img: category1,
        title:"₹1,200" ,
        content: 'Men Striped Regular Fit Shirt'
      }, 
      { img: category2 ,
         title:"₹1,200" ,
        content: 'Men Soft Touch Regular Fit Twill Pants'
      },
      { img: category3,
        title:"₹1,100" ,
        content: 'Men Checked Regular Fit Shirt'
       },
      { img: category4, 
        title:"₹999" ,
        content: 'Men Soft Touch Regular Fit Oxford Shirt'
      },
      { img: category5,
         title:"₹1,000" ,
        content: 'Men Linen Blend Regular Fit Shirt'
       },
      { img: category6,
         title:"₹1,200" ,
        content: 'Men Soft Touch Regular Fit Twill Pants'
       },
      { img: category7,
         title:"₹1,200" ,
        content: 'Men Soft Touch Regular Fit Twill Pants'
       },
      { img: category8,
         title:"₹500" ,
        content: 'Men Soft Touch Regular Fit T-Shirt'
       },
      { img: category9,
         title:"₹1,000" ,
        content: 'Men Linen Blend Pull-on Shorts'
       },
      { img: category10,
         title:"₹1,000" ,
        content: 'Men Floral Printed Regular Fit Shirt'
       },
     
      { img: category12,
         title:"₹900" ,
        content: 'Men Linen Blend Regular Fit Shirt'
       },
      { img: category13,
         title:"₹600" ,
        content: 'Men Striped Regular Fit Shirtt'
       },
      { img: category14,
         title:"₹800" ,
        content: 'Men Linen Blend Pull-on Shorts'
       },
      { img: category15,
         title:"₹800" ,
        content: 'Men Soft Touch Regular Fit Twill Shirt'
       },
      { img: category16,
         title:"₹499" ,
        content: 'Men Soft Touch Regular Fit T-Shirtt',

       },
      { img: category17,
         title:"1,200" ,
        content: 'Men Soft Touch Regular Fit Twill Pantst'
       },
      { img: category18,
         title:"₹250" ,
        content: 'Men Slim Fit Graphic Printed T-shirt'
       },
      { img: category19,
         title:"₹250" ,
        content: 'Men Cotton Slim Fit Graphic T-shirt'
       },
      { img: category20,
         title:"₹899" ,
        content: 'Men Floral Printed Regular Fit Shirt'
       },
      { img: category21,
         title:"₹1,000" ,
        content: 'Men Regular Fit Striped Shirtt'
       },
      { img: category22,
         title:"₹1,000" ,
        content: 'Men Regular Fit Checked Shirtt'
       },
      { img: category23,
         title:"₹1,000" ,
        content: 'Men Regular Fit Checked Shirt'
       },
      { img: category24,
         title:"₹999" ,
        content: 'Men Embroidered Regular Fit Shirt'
       },
      { img: category25,
         title:"₹499" ,
        content: 'Men Soft Touch Regular Fit T-Shirt'
       },
      { img: category26,
         title:"₹999" ,
        content: 'Men Regular Fit Solid Shirt'
       },
      { img: category27,
         title:"₹999" ,
        content: 'Men Soft Touch Regular Fit Oxford Shirt'
       },
      { img: category28,
         title:"₹499" ,
        content: 'Men Soft Touch Regular Fit T-Shirt'
       },
      { img: category29,
         title:"₹999" ,
        content: 'Men Soft Touch Regular Fit Oxford Shirt'
       },
    
      { img: category31,
         title:"₹499" ,
        content: 'Men Soft Touch Regular Fit T-Shirtt'
       },
      { img: category32,
         title:"₹400" ,
        content: 'Men Soft Touch Regular Fit T-Shirt'
       },
    
      { img: category34,
         title:"₹499" ,
        content: 'Men Soft Touch Regular Fit T-Shirt'
       },
      { img: category35,
         title:"₹1,100" ,
        content: 'Men Soft Touch Regular Fit Twill Shirt'
       },
      { img: category36,
         title:"₹1,200" ,
        content: 'Men Linen Blend Regular Fit Pull-on Pants'
       },
      { img: category37,
         title:"₹1,100" ,
        content: 'Men Linen Blend Regular Fit Pull-on Pants'
       },
      { img: category38,
         title:"₹800" ,
        content: 'Men Embroidered Regular Fit Shirt'
       },
      { img: category39,
         title:"₹890" ,
        content: 'Men Linen Blend Pull-on Shorts'
       },
      { img: category40,
         title:"₹499" ,
        content: 'Men Structured Regular Fit T-Shirt'
       },
      { img: category41,
         title:"₹1,000" ,
        content: 'Men Regular Fit Checked Shirt'
       },
      { img: category42,
         title:"₹900" ,
        content: 'Men Textured T-shirtt'
       },
      { img: category43,
         title:"₹400" ,
        content: 'Men Textured T-shirt'
       },
    ]
  return (<>
    <div className={styles}>
      <div className={styles.button}>
        <h3 className={styles.shopfoe}>Shop For:</h3>
        <button className={styles.button1}>Tops</button>
        <button className={styles.button2}>Bottoms</button>
    </div>
     {/*  Map Function */}
         <h4 className={styles.head1}>You searched for: 65 products available</h4>
           
            <div className={styles.Cate}>
          {Datas.map((item) => (

            <div className={styles.data}>
              <img className={styles.product} src={item.img} alt="" width={250}/>
              <h1>{item.title}</h1>
              <h3>{item.content}</h3>
            </div>  
          ))}
            </div>

    </div>
      
  
    </>
  )
}
