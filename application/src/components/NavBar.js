import React from "react";
import Scrollchor from 'react-scrollchor';

 
const NavBar = () => (
   
 
<div class="ui inverted segment">
 <div class="ui inverted secondary pointing stackable container massive menu">

    <Scrollchor to="" className="header item">Home</Scrollchor>
    <Scrollchor to="product" className="header item">Product</Scrollchor>
    <Scrollchor to="about" className="header item">About</Scrollchor>
    <Scrollchor to="featured" className="header item">Featured</Scrollchor>
    <Scrollchor to="contact" className="header item">Contact</Scrollchor>
    <Scrollchor to="demo" className="header item">Demo</Scrollchor>

</div>
</div>



)  

  
export default NavBar;
