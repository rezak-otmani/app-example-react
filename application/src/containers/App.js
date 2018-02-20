import React, { Component } from 'react';
import './App.css';
import Home from '../views/home/home';
import About from '../views/about/about';
import Contact from '../views/contact/contact';
import Demo from '../views/demo/demo';
import Featured from '../views/featured/featured';
import Product from '../views/product/product';
import NavBar from '../components/NavBar';
import {Route, Link, Switch} from 'react-router-dom';

     const main = () => (

    <main>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/product' component={App}/>
      <Route path='/About' component={About}/>
      <Route path='/Featured' component={Featured}/>
      <Route path='/contact' component={App}/>
      <Route path='/Demo' component={Demo}/>
      </Switch>
    </main>
            )


 class App extends Component {

render () {
 return (
 <div className="App">   
  <div class="pusher">
  <div class="ui vertical masthead center aligned segment">
  
       <div>
       <NavBar />
       </div>
               

  <div class="row">
     <Home />
    
  </div>
  <div class="row">
     <Product/>
  </div>
  <div class="row">
   <Link to="/product">
  <About />
   </Link>
  </div>


 <div class="row">
     <Featured />

  </div>
  <div class="row">
   <Link to="/contact">     
 <Contact />
    </Link>
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




