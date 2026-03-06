// import React from 'react'

// export default function Snekers() {
//   return (
//     <div>jhjkhjkh</div>
//   )
// }


import React from "react";
import "./sneakers.css";
import shoe1 from "../Assets/image4.png";   // change your image
import shoe2 from "../Assets/hero7.png";    // change your image

const Sneakers = () => {
  return (
    <div className="sneakers">

      <h1 className="sneakers-title">SNEAKERS COLLECTION</h1>

      <div className="sneakers-container">

        <div className="sneaker-card">
          <img src={shoe1} alt="Sneaker 1" />
          <h3>Urban White</h3>
          <p>₹2,999</p>
          <button>Add to Cart</button>
        </div>

        <div className="sneaker-card">
          <img src={shoe2} alt="Sneaker 2" />
          <h3>Street Black</h3>
          <p>₹3,499</p>
          <button>Add to Cart</button>
        </div>

      </div>

    </div>
  );
};

export default Sneakers;
