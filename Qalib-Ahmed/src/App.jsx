import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './Components/Home/Home'
import LandingPage from './Components/LandingPage/LandingPage'
import CompanyWebsites from './Components/WebsitesTemplate/WebsitesTemplate'
import PersonalTemplate from './Components/PersonalTemplate/PersonalTemplate'
import OtherTemplate from './Components/OtherTemplate/OtherTemplate'
import Details from './Components/Details/Details'
import ScrollToTop from "react-scroll-to-top";
import { FaWhatsapp } from 'react-icons/fa';
import './App.css';
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Qalib/" element={<Home />} />
        <Route path="/Qalib/LandingPage" element={<LandingPage />} />
        <Route path="/Qalib/WebsitesTemplate" element={<CompanyWebsites />} />
        <Route path="/Qalib/PersonalTemplate" element={<PersonalTemplate />} />
        <Route path="/Qalib/OtherTemplate" element={<OtherTemplate />} />
        <Route path="/Qalib/Details/:id" element={<Details />} />
        <Route path="*" element={<Navigate to="/Qalib/" />} />
      </Routes>
      <ScrollToTop smooth
    top="300"
    color='white'
    height='20'
    width='20'
    style={{borderRadius:"90px", backgroundColor:"#2d2f31", right: "15px"}}
    />
    </BrowserRouter>
    <a href="https://wa.me/966506353350" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={40} />
      </a>
      <Footer />
    </div>
  )
}

export default App