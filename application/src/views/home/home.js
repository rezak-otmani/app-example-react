import React, {Component} from 'react';
import image1 from '../../img/image_link1.png';
import image2 from '../../img/image_link2.png';
import Scrollchor from 'react-scrollchor';
import NavBar from '../../components/NavBar';

class Home extends Component {
  

render () {
 return (


<div class="pusher">
  <div class="ui inverted vertical masthead center aligned segment">







        <div class="ui inverted vertical strip segment">

          <div class = "headertop">

            <div class="ui three columns center aligned stackable grid">


<div class="column">
<a href="" target="_self" tabindex="-1">
<svg class = "logo" xmlns="http://www.w3.org/2000/svg" viewBox="-7.7116809713429575 -16.75102391736263 313.60835950127966 385.58404856714714" role="img" preserveAspectRatio="xMidYMid meet">

 <g class ="stylesvgtop">
    <path d="M298.185 264.061l-149.093 88.021L0 264.061V88.021L149.092 0l149.093 88.021v176.04z"></path>
    <text x="150" y="190" ><tspan>DATO</tspan></text>
</g>
</svg>
</a>
</div>

                    <div class="column">
                    <div class="ui inverted segment"><NavBar />
                    </div>
                    </div>
  </div>
    </div>
    </div>













  <div class="ui text container">
     
        <h1 class="ui huge inverted header">
         <div class="ui two wide columns center aligned stackable grid">
         EMPOWERING GROWTH WITH REAL DATA
         </div>
         </h1>
          
         
    <Scrollchor to="product" class ="header item">
      <div class="ui image">
       <div class="ui small fade reveal image">
              <img class="visible content" src={image1} alt=""/>
              <img class="hidden content" src={image2} alt=""/>   
     </div> 
     </div>  
     </Scrollchor>

</div>
</div>
</div>

);
}
}
export default Home;
