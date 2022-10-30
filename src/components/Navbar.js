import "./NavBarStyles.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { useRef } from "react";

  /*
    Added a listener, when page exceeds 1pixel vertically background appears
    with header text. 
    
    Added heading 

  */


const Navbar = () => {

  const [color, setColor] = useState(false);
  const changeColor = ()=>{
    if(window.scrollY >= 1){
      setColor(true);
    } else{
      setColor(false);
    }
  };
  
  window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to="/">
        <h1>Sovtech Software Engineering Challenge</h1>
        </Link>

       
        </div>
   
  );
};

export default Navbar