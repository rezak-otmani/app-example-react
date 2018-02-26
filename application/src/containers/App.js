import React, { Component } from 'react';
import './App.css';
import Home from '../views/home/home';
import About from '../views/about/about';
import Contact from '../views/contact/contact';
import Demo from '../views/demo/demo';
import Featured from '../views/featured/featured';
import Product from '../views/product/product';
import ButtonScroll from '../components/ButtonScroll';


 class App extends Component {

render () {
 return (
  <div class="pusher">
  <div class="ui vertical masthead center aligned segment">
        
      <div class="overlay fixed">
        <ButtonScroll />
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




