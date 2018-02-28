import React, {Component} from 'react';
import story from '../../img/story.png';
import vision from '../../img/vision.png';
import technology from '../../img/technology.png';


class About extends Component {

render () {
 return (

<div className="pusher">
 
  <div className="ui vertical olive inverted masthead center aligned segment">

   
              <div className="center aligned column">
                    <div className="ui sizer vertical segment">
                           <h1 className="ui huge header">MEET DATO</h1>
                      </div>
               </div>
         

      <div className="ui seven columns center aligned stackable grid">             
         <div className="column">
            
           <img src={story} alt="" />
           <h2 className="ui left aligned header">
               <div className="ui divider"></div>
               <div className="content">
               OUR STORY
                <div className="sub header"><br />I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the                              font. Feel free to drag and drop me a ywhere you like on your page.
                 </div> 
               </div>
            </h2>
          </div>
         

          <div className="column">
           <img src={vision} alt="" />
          <h2 className="ui left aligned header">
               <div className="ui divider"></div>
               <div className="content">
                     OUR VISION
                     <div className="sub header"><br />I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edt Text” or double click me to add your own content and make changes to                                   the font. Feel free to drag and drop me an ywhere you like on your page.                  
                     </div> 
              </div>
           </h2>
          </div>
        

          <div className="column">
              <img src={technology} alt="" />
           <h2 className="ui left aligned header">
                <div className="ui divider"></div>
                <div className="content">
                       OUR TECHNOLOGY
                       <div className="sub header"><br />I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double clic me to add your own content and make changes to                                   the font. Feel free to drag and drop me anywhere you like on your page.  
                      </div> 
                </div>
          </h2>
          </div>

    </div>
  

</div>
</div>

);
}}
export default About;
