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
       <header>
         
       </header>


       <Home />
      <Product/>   
      <About /> 
      <Featured />
       <Contact /> 
       <Demo /> 
       

{this.props.children}



      </div>
    );
  }
}

export default App;
