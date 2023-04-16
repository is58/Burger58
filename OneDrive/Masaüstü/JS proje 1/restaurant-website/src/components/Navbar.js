import React from "react";
import Logo from "../assets/hamburgerlogo.png"
import { Link } from "react-router-dom";



function Navbar(){
    return(
<div className="navbar">
   <div className="leftSide">
   <Link to="/"><img src={Logo} /></Link>
   </div>
   <div className="rightSide">
   <Link to ="/">Home</Link>
   <Link to ="Menu">Menu</Link>
   <Link to ="About">About</Link>
   <Link to ="contact">Contact</Link>
   </div>
 
  
   
   







</div>
    );
}



export default Navbar