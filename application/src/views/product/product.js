import React, {Component} from 'react';
import ecran from '../../img/ecran.jpg';
import graph from '../../img/graphics.png';
import Scrollchor from 'react-scrollchor';

class Product extends Component {

render () {
 return (

      

<div className="pusher">
 
  <div className="ui vertical masthead center aligned segment">

       
          <div className="center aligned column">
               <div className="ui sizer vertical segment">
               <h1 className="ui huge header">OUR TECHNOLOGY</h1>
               </div>
          </div>
     


          <div className="ui seven columns center aligned stackable grid">
                
                <div className="column">
                    <h2 className="ui left aligned header">
                         <div className="content">
                        <span className="ui olive header"> 01 /</span> FAST
                                            <div className="sub header">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your                                                                   content and make changes to the font. Feel free to drag and drop me a ywhere you like on your page.     
                                            </div> 
                        </div>
                   </h2>
               </div>
                
                  <div className="column">
                    <h2 className="ui left aligned header">
                           <div className="content">
                        <span className="ui olive header">  02 /</span> SECURE
                                              <div className="sub header">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own                                                                           content and make changes to the font. Feel free to drag and drop me an ywhere you like on your page.                  
                                              </div> 
                          </div>
                    </h2>
                  </div>
        

                   <div className="column">
                       <h2 className="ui left aligned header">
                              <div className="content">
                          <span className="ui olive header">   03 /</span> EASY
                                                 <div className="sub header">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your                                                                   own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.               
                                                  </div> 
                             </div>
                      </h2>
                  </div>

         </div>



           

    
 
             <div className="ui three columns center aligned grid">
     
                
                 
                      <div className="ui reveal">
                            <div className="visible content">
                                   <img src={graph} alt = "" className="ui Big image" />
                            </div>
                            <div className="hidden content">
                                   <img src={ecran} alt = "" className="move left" />
                            </div>
                      </div>
                   
           
               </div>
               
               <Scrollchor to="demo" className="header item">
               <div className="positive massive ui button">Try a demo
              <i className="right arrow icon">
             </i></div>
              </Scrollchor>

            <br />
            <br />
            <br />

</div>
</div>

);
}}
export default Product;
