import React, {Component} from 'react';
import image1 from '../../img/image_link1.png';
import image2 from '../../img/image_link2.png';


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
        <div class="ui centered image" > 
             <img src={image1} alt="" />       
       </div>
 </div>
 

</div>
</div>

);
}
}
export default Home;
