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


  <div className="pusher">
 
  <div className="ui vertical masthead center aligned segment"> 
                <div className="center aligned column">            
                <div className="ui sizer vertical segment">
               <h1 className="ui huge header">USING DATO</h1>
               </div>
               </div>
              
            


    
      <div className="ui seven columns center aligned stackable grid">
        
        <div className="column">
                <img src={sat} alt="" />
        </div>
        <div className="column">
                <img src={up} alt="" />
        </div>
        <div className="column">
                <img src={tech2023} alt="" />
        </div>
        <div className="seven column row">
        <div className="column">
                 <img src={le} alt="" />
        </div>
        <div className="column">
                 <img src={infodata} alt="" />
        </div>
        <div className="column">
                 <img src={info} alt="" />
        </div>
        </div>
      
    </div>
           
</div>
</div>
);
}}
export default Featured;
