import React from 'react';
import story from '../../img/story.png';
import vision from '../../img/vision.png';
import technology from '../../img/technology.png';

export const About = () => (
  

<div class="pusher">
 
  <div class="ui vertical olive inverted center aligned segment">

   <div class="ui container">

         <div class="row">
               <div class="center aligned column">
               <div class="ui sizer vertical segment">
               <div class="ui huge header">MEET DATO</div>
               </div>
               </div>
         </div>


     <div class="row">
      <div class="ui three columns grid">
               
         <div class="column">

           <h2 class="ui icon header">
           <img src={story} />
               <div class="ui dividing header"></div>
               <div class="content">
               OUR STORY
                <div class="sub header">I'm a paragraph. Click here to add your                       own text and edit me. It’s easy. Just click “Edit Text” or                      double click me to add your own content and make changes t                      o the font. Feel free to drag and drop me a ywhere you lik                      e on your page.
                </div> 
                 </div>
            </h2>
          </div>
          

          <div class="column">
          <h2 class="ui icon header">
               <img src={vision} />
               <div class="ui dividing header"></div>
               <div class="content">
                     OUR VISION
                     <div class="sub header">I'm a paragraph. Click here to add                            your own text and edit me. It’s easy. Just click “Edi                           t Text” or double click me to add your own con                                  tent and make changes to the font. Feel free to drag                            and drop me an ywhere you like on your page.
                    </div> 
                    </div>
           </h2>
          </div>
        

          <div class="column">
           <h2 class="ui icon header">
                 <img src={technology} />
                <div class="ui dividing header"></div>
                <div class="content">
                       OUR TECHNOLOGY
                       <div class="sub header">I'm a paragraph. Click here to ad                       d your own text and edit me. It’s easy. Just click “Edit                        Text” or double click me to add your own content and make                       changes to the font. Feel free to drag and drop me an                           ywhere you like on your page.
                </div> 
                </div>
          </h2>
          </div>

    </div>
   </div>
  
   
       


</div>
</div>
</div>

);

export default About;
