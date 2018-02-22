import React, {Component} from 'react';
import ecran from '../../img/ecran.jpg';
import graph from '../../img/graphics.png';

class Product extends Component {

render () {
 return (

       

<div class="pusher">
 
  <div class="ui vertical masthead center aligned segment">

       
          <div class="center aligned column">
               <div class="ui sizer vertical segment">
               <h1 class="ui huge header">OUR TECHNOLOGY</h1>
               </div>
          </div>
     


          <div class="ui seven columns center aligned stackable grid">
                
                <div class="column">
                    <h2 class="ui header">
                         <div class="content">
                                    01 / FAST
                                            <div class="sub header">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your                                                                   content and make changes to the font. Feel free to drag and drop me a ywhere you like on your page.     
                                            </div> 
                        </div>
                   </h2>
               </div>
                
                  <div class="column">
                    <h2 class="ui header">
                           <div class="content">
                                    02 / SECURE
                                              <div class="sub header">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own                                                                           content and make changes to the font. Feel free to drag and drop me an ywhere you like on your page.                  
                                              </div> 
                          </div>
                    </h2>
                  </div>
        

                   <div class="column">
                       <h2 class="ui header">
                              <div class="content">
                                          03 / EASY
                                                 <div class="sub header">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your                                                                   own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.               
                                                  </div> 
                             </div>
                      </h2>
                  </div>

         </div>



           

    
 
             <div class="ui three columns center aligned grid">
     
                
                 
                      <div class="ui reveal">
                            <div class="visible content">
                                   <img src={graph} class="ui Big image" />
                            </div>
                            <div class="hidden content">
                                   <img src={ecran} class="move left" />
                            </div>
                      </div>
                   
           
               </div>

               <div class="ui huge primary button">Try a demo
              <i class="right arrow icon">
             </i></div>
    



</div>
</div>

);
}}
export default Product;
