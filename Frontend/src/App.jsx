import React from 'react'
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <ContactUs/>
        <Footer />
    </div>
  )
}

export default App