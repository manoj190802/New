

// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './Components/Home'
// import Navbar from './Components/Navbar'
// import { LinenStyle } from './Components/linenStyle'
// import Pullon from './Components/Pullon'
// import Mens from './Components/Mens'
// import Women from './Components/Women'
// import Snekers from './Components/Snekers'


// export default function App() {
//   return (
//     <div>
//        <BrowserRouter>
//        <Navbar/>
//         <Routes>
//             {/* <Route path='/' element={Home}></Route> */}
//             <Route path='/' element={Mens}></Route>
//             <Route path='/women' element={Women}></Route>
//             <Route path='/Snekers' element={Snekers}></Route>
//             <Route path='/linenstyle' element={LinenStyle}></Route>
//             <Route path='/pullon' element={Pullon}></Route>
//         </Routes>

//        </BrowserRouter> 
//     </div>
//   )
// }








import React from 'react'
import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Mens from './Components/Mens'
import Women from './Components/Women'
import Footer from './Components/Footer'
import WomenCate from './Components/WomenCate'
import MenCate from './Components/MenCate'
import Activewear from './Components/Activewear/Activewear'
import { CartProvider } from './Components/CartContext'
import CartPage from './Components/Cart/CartPage'
import Checkout from './Components/Cart/Checkout'
import Linen from './Components/Linenproduct/Linen'
import Login from './Components/Login/Login'


export default function App() {
  return (
   <CartProvider> 
 
    <BrowserRouter>
   
       <Navbar/>
       
       <Routes>
             <Route path='/' element={<Mens/>}/>
              <Route path='/Women' element={<Women/>}/>
              <Route path='/womencate' element={<WomenCate/>}/>
              <Route path='/Mencate' element={<MenCate/>}/>
              <Route path='/Activewear' element={<Activewear/>}/>
              <Route path='/linen' element={<Linen/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/login' element={<Login/>}/>
           
       </Routes>
       
     </BrowserRouter> 
      
      <Footer/>
    
    </CartProvider>
  )
}
