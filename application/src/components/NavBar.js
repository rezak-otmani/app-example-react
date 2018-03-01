import React from "react";
import Scrollchor from 'react-scrollchor';

 
const NavBar = () => (
   
 

<div className="ui inverted segment">
 <div className="ui secondary stackable massive compact menu">
    <Scrollchor to="" className= "olive item active">Home</Scrollchor>
    <Scrollchor to="product" className="item">Product</Scrollchor>
    <Scrollchor to="about" className="item">About</Scrollchor>
    <Scrollchor to="featured" className="item">Featured</Scrollchor>
    <Scrollchor to="contact" className="item">Contact</Scrollchor>
    <Scrollchor to="demo" className="item">Demo</Scrollchor>
</div>
</div>



)  

  
export default NavBar;
