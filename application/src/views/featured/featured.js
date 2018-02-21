import React, {Component} from 'react';
import tech2023 from '../../img/tech2023.png';
import info from '../../img/info.png';
import infodata from '../../img/infodata.png';
import le from '../../img/le.png';
import sat from '../../img/sat.png';
import up from '../../img/up.png';


class Featured extends Component {

render () {
 return (


  <div class="pusher">
 
  <div class="ui vertical masthead center aligned segment"> 
             
                <div class="ui sizer vertical segment">
               <h1 class="ui huge header">USING DATO</h1>
               </div>
              
            


    
      <div class="ui seven columns center aligned stackable grid">
        
        <div class="column">
                <img src={sat} alt="" />
        </div>
        <div class="column">
                <img src={up} alt="" />
        </div>
        <div class="column">
                <img src={tech2023} alt="" />
        </div>
        <div class="seven column row">
        <div class="column">
                 <img src={le} alt="" />
        </div>
        <div class="column">
                 <img src={infodata} alt="" />
        </div>
        <div class="column">
                 <img src={info} alt="" />
        </div>
        </div>
      
    </div>
           
</div>
</div>
);
}}
export default Featured;
