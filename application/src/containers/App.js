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
  <div className="pusher">
  <div className ="ui vertical masthead center aligned segment">
        
      <div className ="overlay fixed">
        <ButtonScroll />
       </div>

  <div id="home" className ="row">
         <Home />
  </div>
    
  <div id="product"className="row">
         <Product/>
  </div>

  <div id="about" className="row">
          <About />
  </div>


   <div id="featured" className="row">
           <Featured />
   </div>
 
   <div id="contact" className="row">
            <Contact />
   </div>

     <div id="demo" className="row">
             <Demo />
     </div>

</div>


{this.props.children}

</div>

 
     
    );
  }
}

export default App;




