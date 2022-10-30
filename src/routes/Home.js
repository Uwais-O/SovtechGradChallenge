import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'
import Skills from '../components/Skills'

  /*
    Home.js acts as main page
    
    Routed components respectively 

  */


const Home = () => {
  return (
    <><div>
      <Navbar />
    </div>
    <div><HeroImg /></div>
    <div><AboutContent /></div>
    <div ><Skills /></div>
    <div><Footer /></div>
    </>
    
    
  )
}

export default Home;
