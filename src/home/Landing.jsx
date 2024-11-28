import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import Pilotperks from './Pilotperks';
import Roadmap from './Roadmap';
import Projections from './Projections';
import Pilotlifestlye from './Pilotlifestyle';
import Pilotjourney from './PilotJourney';
import End from './End';
import Footer from './Footer';



function Landing() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Pilotperks />
        <Roadmap />
        <Projections />
        <End />
        <Footer />


    </div>
  );
}

export default Landing;