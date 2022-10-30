import "./HeroImgStyles.css";
import React from 'react';
import bg1 from "../assets/codingbg.png";
import { Link } from "react-router-dom";

  /*
    Created a landing page 

    Added an image and made it opaque with mask class
    
    Added two buttons which routed to github and linkedin respectively

    Added and styled info - name and subtext
  */


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="pic1"
            src={bg1} alt="me"/>
        </div>
        <div className="content">
            <h1>Uwais Osman</h1>
            <p>Software Developer</p>
            <div>
                <a className="btn"
                href="https://github.com/Uwais-O/My-Projects" >Projects</a>
                <a className="btn-light"
                href="https://www.linkedin.com/in/uwais-osman-72a6b0241">LinkedIn</a>
            </div>

            </div>
          
                </div>
    
    
  )
}

export default HeroImg