// import React from 'react'
// import './Navbar.css'
// import logo from "../Assets/logo1.png"
// import carticon from "../Assets/carticon.png"
// import Heroimg from "../Assets/image4.png"
// import heroimg2 from "../Assets/heroimg2.png"


// import img1 from "../Assets/LInen.png"
// import img2 from "../Assets/Pullonpant.png"
// import img3 from "../Assets/Oxfortshirt.png"
// import img4 from "../Assets/InterlockTshirt.png"
// import { useNavigate } from 'react-router-dom'


// export const Navbar = () => {
//   return (
//     <><div className='Navbar'>
      
//     <ul className='nav-menu'>
      
//     <li>ALL</li>
//     <li>MENs</li>
//     <div className='logo'>
//         <img src={logo} alt="logo" width={"200"} />
//     </div>
//     <li>KIDS</li>
//     <li>PERFUMES</li>
    
//      </ul>
    

//  </div>
//    <div className='carticon'> <img src={carticon} alt="" width={"40px"} height={"40px"} /></div>
// <img className='Heroimg' src={Heroimg} alt="" />

// {/* Cart */}
// <div className='Casuallove'><h1 >Casual Love</h1></div>


//    </>
//   )
// }






// // function Cart(){
// //     // const navigate = useNavigate()
// //   const datas=[
// // {
// //   img1:img1,
// //   content1:"Linen Style"
// // },
// // {
// //   img2:img2,
// //   content2:"Pull On Pant"
// // },
// // {
// //   img3:img3,
// //   content3:"Oxfort Shirt"
// // },
// // {
// //   img4:img4,
// //   content4:"Interlock Tshirt"
// // }
// //   ]

// //   return <div className='cart-container'>
// //     {
        
// //       datas.map((item)=>(
// //      <div>
// //         <div className='img1'><img className='cartimg1' src={item.img1} alt="" />
// //          <p className='overlay1' >{item.content1}</p></div>

// //         <div className='img2'><img className='cartimg2' src={item.img2} alt="" />
// //          <p className='overlay2'>{item.content2}</p></div>

// //         <div className='img3'><img className='cartimg3' src={item.img3} alt="" />
// //          <p className='overlay3'>{item.content3}</p></div>

// //         <div className='img4'><img className='cartimg4' src={item.img4} alt="" />
// //          <p className='overlay4'>{item.content4}</p></div>
          
// //         </div>
// //       ))
// //     }
    
// //   </div>
// //   }export default Cart


// // export const Hero = () => {
// //   return (
// //     <div className='Casuallove'><h1 >Casual Love</h1>
// //     <img src={heroimg2} alt="" />
// //     </div>
    
// //   )
// // }



// import React from 'react'
// import './Navbar.css'
// import logo from "../Assets/logo1.png"
// import carticon from "../Assets/carticon.png"
// import Heroimg from "../Assets/image4.png"
// import heroimg2 from "../Assets/heroimg2.png"


// import img1 from "../Assets/LInen.png"
// import img2 from "../Assets/Pullonpant.png"
// import img3 from "../Assets/Oxfortshirt.png"
// import img4 from "../Assets/InterlockTshirt.png"
// import { useNavigate } from 'react-router-dom'
// export default function Navbar() {
//   return (
//     <div>
        /* <><div className='Navbar'>
      
     <ul className='nav-menu'>
      
    <li>ALL</li>
   <li>MENs</li>
    <div className='logo'>  
             <img src={logo} alt="logo" width={"200"} />
    </div>
     <li>KIDS</li>
     <li>PERFUMES</li>
    
      </ul>
    
          
  </div>
    <div className='carticon'> <img src={carticon} alt="" width={"40px"} height={"40px"} /></div>
 <img className='Heroimg' src={Heroimg} alt="" />

 {/* Cart 
 <div className='Casuallove'><h1 >Casual Love</h1></div>


    </> */

    /* <nav>
     
      <li>
        <a href="/">Mens</a>
      </li>
      <li>
        <a href="/women">Women</a>
      </li>
      <li>
        <a href="/Snekers">Snekers</a>
      </li>
    </nav>
    </div>
  )
} */







import React from 'react'
import './Navbar.css'




import logo from '../Assets/logo1.png'
import carticon from '../Assets/carticon.png'
import favicon from '../Assets/favicon.png'
import { Link } from 'react-router-dom'


import { useEffect, useState } from "react";


export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scroll down → hide
      } else {
        setShowNavbar(true); // scroll up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <ul className="Nav-menu">
        <li><Link to="/">Mens</Link></li>
        <li><Link to="/Women">Womens</Link></li>
      </ul>

      <div className="Nav-logo">
        <img  src={logo} alt="" width={200}/>
      </div>

      <div className="Nav-login-cart">
        <button>Login</button>
        <img src={favicon} alt="" width={30}/>
        <img className="carticon" src={carticon} alt="" width={40} />
      </div>
    </div>
  );
}


