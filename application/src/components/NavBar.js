import React from "react";

import Home from '../views/home/home';
import About from '../views/about/about';
import Contact from '../views/contact/contact';
import Demo from '../views/demo/demo';
import Featured from '../views/featured/featured';
import Product from '../views/product/product';

//import { Route} from "react-router";
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
 
const NavBar = () => (
   
         /*
  
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/#product'>Product</Link></li>
       <li><Link to='/About'>About</Link></li>
         <li><Link to='/Featured'>Featured</Link></li>
        <li><Link to='/#contact'>Contact</Link></li>
        <li><Link to='/Demo'>Demo</Link></li>
      </ul>*/
<nav>
<div class="ui inverted segment">
 <div class="ui inverted secondary pointing right menu">
 <Link to='/' class="active item">
    Home
  </Link>
  <Link to='/#product' class="link item">
    Product
    </Link>
     <Link to='/#about' class="item">
    About
  </Link>


    <Link to='/#featured' class="item">
    Featured
  </Link>
  <Link to='/#contact' class="item">
    Contact
  </Link>
  <Link to='/#demo' class="item">
    Demo
  </Link>

    

</div>
</div>
</nav>


)  

  
export default NavBar;
