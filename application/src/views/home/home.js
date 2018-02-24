import React, {Component} from 'react';
import image1 from '../../img/image_link1.png';
import image2 from '../../img/image_link2.png';
import Scrollchor from 'react-scrollchor';

class Home extends Component {
  

render () {
 return (


<div class="pusher">
  <div class="ui inverted vertical masthead center aligned segment">

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
