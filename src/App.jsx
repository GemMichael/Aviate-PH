import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landinglist from './home/All Flying School/Landinglist';
import Landing from './home/Landing';
import AAG from './home/All Flying School/AAG';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/landinglist' element={<Landinglist />} />
        <Route path='/aag' element={<AAG />} />
      </Routes>
    </Router>
  );
}
