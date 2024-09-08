import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import Pilotperks from './Pilotperks';
import Roadmap from './Roadmap';
import Projections from './Projections';
import Pilotlifestlye from './Pilotlifestyle';


function Landing() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Pilotperks />
        <Roadmap />
        <Projections />
        <Pilotlifestlye />
    </div>
  );
}

export default Landing;