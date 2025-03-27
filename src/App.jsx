import React from 'react'
import HeadNav from './components/HeadNav'
import Hero from './components/Hero'
import DataBox from './components/DataBox'
import Features from './components/Features'
import Cards from './components/Cards'
import Map from './components/Map'
import FeaturedIn from './components/FeaturedIn'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return <div>
    <header><HeadNav /></header>
    <Hero />
    <DataBox />
    <Features />
    <Cards />
    <Map />
    <FeaturedIn />
    <Testimonials />
    <CTA />
  </div>
}

export default App