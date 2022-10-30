import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

  /*
    Created a route page for about 
    
    Page contents were displayed on home as component


  */

const about = () => {
  return (
    <div> <Navbar/>
    <HeroImg2 heading = "About me" text = ""/>
    <AboutContent/>
    <Footer/></div>
  )
}

export default about