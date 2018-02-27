import React from "react";
import Scrollchor from 'react-scrollchor';

 
const NavBar = () => (
   
 
<div class="ui inverted segment">
 <div class="ui secondary stackable massive compact menu">
    <Scrollchor to="" class= "olive item active">Home</Scrollchor>
    <Scrollchor to="product" class="item">Product</Scrollchor>
    <Scrollchor to="about" class="item">About</Scrollchor>
    <Scrollchor to="featured" class="item">Featured</Scrollchor>
    <Scrollchor to="contact" class="item">Contact</Scrollchor>
    <Scrollchor to="demo" class="item">Demo</Scrollchor>
</div>
</div>



)  

  
export default NavBar;
