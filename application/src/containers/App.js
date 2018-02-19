import React, { Component } from 'react';
import './App.css';
import Home from '../views/home/home';
import About from '../views/about/about';
import Contact from '../views/contact/contact';
import Demo from '../views/demo/demo';
import Featured from '../views/featured/featured';
import Product from '../views/product/product';


 class App extends Component {

render () {
 return (
 <div className="App">   
  <div class="pusher">
  <div class="ui vertical masthead center aligned segment">

  <div class="row">
     <Home />
    
  </div>
  <div class="row">
     <Product/>
  </div>
  <div class="row">
     <About />
  </div>

 <div class="row">
     <Featured />

  </div>
  <div class="row">
      <Contact />

</div>
  
 <div class="row">
     <Demo />

  </div>


</div>

</div>
{this.props.children}

</div>

 
     
    );
  }
}

export default App;
