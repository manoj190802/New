import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo1.png'
import carticon from '../Assets/carticon.png'
import favicon from '../Assets/favicon.png'
import { Link } from 'react-router-dom'
import { useCart } from './CartContext'

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { cartCount } = useCart();

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
        <Link to="/"><img  src={logo} alt="" width={200}/></Link>
      </div>

      <div className="Nav-login-cart">
        <button>Login</button>
        <img src={favicon} alt="" width={30}/>
        <Link to="/cart" className="cart-badge-container">
            <img className="carticon" src={carticon} alt="" width={40} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </div>
  );
}
