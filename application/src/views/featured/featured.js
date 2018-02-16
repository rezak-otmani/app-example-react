import React from 'react';
import tech2023 from '../../img/tech2023.png';
import info from '../../img/info.png';
import infodata from '../../img/infodata.png';
import le from '../../img/le.png';
import sat from '../../img/sat.png';
import up from '../../img/up.png';

export const Featured = () => (
  <div class="pusher">
 
  <div class="ui vertical masthead center aligned segment">

   <div class="ui container">
               <div class="row">
               <div class="center aligned column">
               <div class="ui sizer vertical segment">
               <div class="ui huge header">USING DATO</div>
               </div>
               </div>
               </div>
              

               <div class="row">
    <div class="column">
      <div class="ui three column grid">
        
        <div class="column">
          <img src={sat} />
        </div>
        <div class="column">
          <img src={up} />
        </div>
        <div class="column">
          <img src={tech2023} />
        </div>
        <div class="column">
          <img src={le} />
        </div>
        <div class="column">
          <img src={infodata} />
        </div>
        <div class="column">
          <img src={info} />

        </div>
      </div>
    </div>
  </div>

          

</div>
</div>
</div>
);

export default Featured;
