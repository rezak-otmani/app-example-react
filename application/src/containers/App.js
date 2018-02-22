import React, { Component } from 'react';
import './App.css';
import Home from '../views/home/home';
import About from '../views/about/about';
import Contact from '../views/contact/contact';
import Demo from '../views/demo/demo';
import Featured from '../views/featured/featured';
import Product from '../views/product/product';
import NavBar from '../components/NavBar';
import Logo from '../img/stalwart.jpeg';



 class App extends Component {

render () {
 return (
  <div class="pusher">
  <div class="ui vertical masthead center aligned segment">
        <div class="ui inverted vertical strip segment"> 
                <div class="ui seven columns center aligned stackable grid"> 
                   <div class="column">

<div data-viewbox="-39.235 -12.286 377 377" data-strokewidth="6"                     data-svg-id="svgshape.v2.Svg_08e9266742a9484b90115d29bbfa9360" 
     data-display-mode="legacyFit" tabindex="0" role="image" 

class="style-logo">
     
                   <a class = "alogo" href="" target="_self" tabindex="-1">
<svg class ="stylesvg" xmlns="http://www.w3.org/2000/svg" viewBox="-7.7116809713429575 -16.75102391736263 313.60835950127966 385.58404856714714" role="img" preserveAspectRatio="xMidYMid meet">
       <span> <text x="300" y="250"> <span>DATO</span></text></span>
 <g>
        <path d="M298.185 264.061l-149.093 88.021L0 264.061V88.021L149.092 0l149.093 88.021v176.04z"></path>

</g>
</svg>
</a>
    </div>
 
                   </div>
                    <div class="column">
                    <div class="ui inverted segment"><NavBar />
                    </div>
                    </div>
                </div>

 

         </div>
            




  <div id="home" class="row">
         <Home />
  </div>

  <div id="product"class="row">
         <Product/>
  </div>

  <div id="about" class="row">
          <About />
  </div>


   <div id="featured" class="row">
           <Featured />
   </div>
 
   <div id="contact" class="row">
            <Contact />
   </div>

    <div id="demo" class="row">
             <Demo />
     </div>


</div>


{this.props.children}

</div>

 
     
    );
  }
}

export default App;




