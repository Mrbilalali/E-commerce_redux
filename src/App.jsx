import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import AddCart from './Components/AddCart.jsx'
import Footer from './Components/Footer.jsx'
import Home from './pages/home.jsx'
import Shop from './pages/shop.jsx'
import ProductDetails from './Components/ProductDetails.jsx'
import toast, { Toaster } from 'react-hot-toast';
import Checkout from './Components/Checkout.jsx'
import PaymentMessage from './Components/PaymentMessage.jsx'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/shop' element={<Shop/>} />
      <Route path='/AddCart' element={<AddCart/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/payment' element={<PaymentMessage/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route exact path='/about' element={<About/>} />
      <Route path="/products/:productId" element={<ProductDetails />} />
    </Routes>
    <Toaster />
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App