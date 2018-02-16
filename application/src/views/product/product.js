import React from 'react';
import ecran from '../../img/ecran.jpg';
import graph from '../../img/graphics.png';
export const Product = () => (
 
       

<div class="pusher">
 
  <div class="ui vertical masthead center aligned segment">

   <div class="ui container">
               <div class="row">
               <div class="center aligned column">
               <div class="ui sizer vertical segment">
               <div class="ui huge header">OUR TECHNOLOGY</div>
               </div>
               </div>
         </div>


                 <div class="row">
      <div class="ui three columns grid">
               
         <div class="column">

           <h2 class="ui header">
               <div class="content">
               01 / FAST
                <div class="sub header">I'm a paragraph. Click here to add your                       own text and edit me. It’s easy. Just click “Edit Text” or                      double click me to add your own content and make changes t                      o the font. Feel free to drag and drop me a ywhere you lik                      e on your page.
                </div> 
                 </div>
            </h2>
          </div>
          

          <div class="column">
          <h2 class="ui header">
               <div class="content">
                     02 / SECURE
                     <div class="sub header">I'm a paragraph. Click here to add                            your own text and edit me. It’s easy. Just click “Edi                           t Text” or double click me to add your own con                                  tent and make changes to the font. Feel free to drag                            and drop me an ywhere you like on your page.
                    </div> 
                    </div>
           </h2>
          </div>
        

          <div class="column">
           <h2 class="ui header">
                <div class="content">
                       03 / EASY
                       <div class="sub header">I'm a paragraph. Click here to ad                       d your own text and edit me. It’s easy. Just click “Edit                        Text” or double click me to add your own content and make                       changes to the font. Feel free to drag and drop me an                           ywhere you like on your page.
                </div> 
                </div>
          </h2>
          </div>

    </div>
   </div>
         



           

    
   
                <div class="row">
     
                  <div class="">
                  
                    <img src={ecran}/>
                  </div>
               </div>

               <div class="ui huge primary button">Try a demo
              <i class="right arrow icon">
             </i></div>
    



</div>
</div>
</div>

);

export default Product
;
