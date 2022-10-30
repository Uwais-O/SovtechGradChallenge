import "./FooterStyles.css"
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaMailBulk  } from "react-icons/fa"

  /*
    Created a route page for about section
    
    imported icons and linked them to external pages 

    Added email details

  */


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <h4>Connect with me!</h4>
                        <div className="email">
                   
                    <div>
                        <p>Uwaisosman999@gmail.com</p>
                        </div>
                        </div>
                <div className="social">
                  <a href= "https://www.linkedin.com/in/uwais-osman-72a6b0241">
                <FaLinkedinIn size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </a>

                <a href="https://github.com/Uwais-O/My-Projects">
                <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </a>

                <a href="https://www.instagram.com/uwaiis.o/?hl=en">
                <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </a>

                </div>
                </div>
                </div>
            </div>
            
            
   
  )
}

export default Footer