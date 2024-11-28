import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landinglist from './home/All Flying School/Landinglist';
import Landing from './home/Landing';
import AAG from './home/All Flying School/AAG';
import AFES from './home/All Flying School/AFES';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Airworks from './home/All Flying School/Airworks';
import AAA from './home/All Flying School/AAA';
import AVIAN from './home/All Flying School/AVIAN';
import CHEYNAIR from './home/All Flying School/CHEYNAIR';
import CONTINENTAL from './home/All Flying School/CONTINENTAL';
import CONSTRAILS from './home/All Flying School/CONSTRAILS';
import DELTA from './home/All Flying School/DELTA';
import ECHO from './home/All Flying School/ECHO';
import FAST from './home/All Flying School/FAST';
import FAA from './home/All Flying School/FAA';
import FLITE from './home/All Flying School/FLITE';
import IAU from './home/All Flying School/IAU';
import LAMINAR from './home/All Flying School/LAMINAR';
import LEIAA from './home/All Flying School/LEIAA';
import OMNI from './home/All Flying School/OMNI';
import ORIENT from './home/All Flying School/ORIENT';
import PILIPINAS from './home/All Flying School/PILIINAS';
import PRECISION from './home/All Flying School/PRECISION';
import ROYHLE from './home/All Flying School/ROYHLE';
import SAPPHIRE from './home/All Flying School/SAPPHIRE';
import SECDEA from './home/All Flying School/SECDEA';
import ALEXIUS from './home/All Flying School/ALEXIUS';
import STRIKE from './home/All Flying School/STRIKE';
import TOPFLITE from './home/All Flying School/TOPFLITE';
import WCC from './home/All Flying School/WCC';
import LandingDiscovery from './home/Recreational/LandingDiscovery';
import Sputnik from './home/Recreational/Sputnik';
import Goodboys from './home/Recreational/Goodboys';
import Yatzar from './home/Recreational/Yatzar';
import Subic from './home/Recreational/Subic';
import LandingShop from './home/Aviation Shop/LandingShop';
import L3harris from './home/Aviation Shop/L3harris';
import Skyaerotrade from './home/Aviation Shop/Skyaerotrade';
import Pilotgoodies from './home/Aviation Shop/Pilotgoodies';
import Pilotstarterpack from './home/Aviation Shop/Pilotstarterpack';

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
        <Route path='afes' element={<AFES />} />
        <Route path='airworks' element={<Airworks />} />
        <Route path='aaa' element={<AAA />} />
        <Route path='avian' element={<AVIAN />} />
        <Route path='cheynair' element={<CHEYNAIR />} />
        <Route path='continental' element={<CONTINENTAL />} />
        <Route path='constrails' element={<CONSTRAILS />} />
        <Route path='delta' element={<DELTA />} />
        <Route path='echo' element={<ECHO />} />
        <Route path='fast' element={<FAST />} />
        <Route path='faa' element={<FAA />} />
        <Route path='flite' element={<FLITE />} />
        <Route path='iau' element={<IAU />} />
        <Route path='laminar' element={<LAMINAR />} />
        <Route path='leiaa' element={<LEIAA />} />
        <Route path='omni' element={<OMNI />} />
        <Route path='orient' element={<ORIENT />} />
        <Route path='pilipinas' element={<PILIPINAS />} />
        <Route path='precision' element={<PRECISION />} />
        <Route path='royhle' element={<ROYHLE />} />
        <Route path='sapphire' element={<SAPPHIRE />} />
        <Route path='secdea' element={<SECDEA />} />
        <Route path='alexius' element={<ALEXIUS />} />
        <Route path='strike' element={<STRIKE />} />
        <Route path='topflite' element={<TOPFLITE />} />
        <Route path='wcc' element={<WCC />} />
        <Route path='/landingdiscovery' element={<LandingDiscovery />} />
        <Route path='sputnik' element={<Sputnik />} />
        <Route path='goodboys' element={<Goodboys />} />
        <Route path='yatzar' element={<Yatzar />} />
        <Route path='subic' element={<Subic />} />
        <Route path='/landingshop' element={<LandingShop />} />
        <Route path='skyaerotrade' element={<Skyaerotrade />} />
        <Route path='l3harris' element={<L3harris />} />
        <Route path='pilotgoodies' element={<Pilotgoodies />} />
        <Route path='pilotstarterpack' element={<Pilotstarterpack />} />
      </Routes>
    </Router>
  );
}
