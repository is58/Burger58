import React from "react";
import { Link, redirect } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";

function Home(){
    return(
<div className="home"> 
<div className="headerContainer">
<h1>Burger 58</h1>
<p>Delicious Hamburgers <br /> with <span>58</span>  Spicy Mixed</p>
<Link to = "menu" ><button>Order Now</button></Link>

</div>
</div>

    );
}

export default Home