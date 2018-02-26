import React from "react";
import Scrollchor from 'react-scrollchor';


const ButtonScroll= () => (
     

    
   <div class="ui link list"> 
       <Scrollchor to="" class="item">
        
        <button class="ui inverted grey mini circular icon button" title='Home' onClick={this.divStyle}>
        </button>    

    
       </Scrollchor>

      <br />
     <Scrollchor to="product" class="item">
       
         <button class="ui inverted grey mini circular icon button" title='Product'>
       
        </button> 

      </Scrollchor>
     <br />
    
       <Scrollchor to="about" class="item">
       
         <button class="ui inverted grey mini  circular icon button" title='About'>
       
        </button> 
        
      </Scrollchor>

     <br />
     
     <Scrollchor to="featured" class="item">
      
        <button class="ui inverted grey mini circular icon button" title='Featured'>
       
        </button> 

    </Scrollchor>
      <br />


     <Scrollchor to="contact" class="item">
      
        <button class="ui inverted grey mini circular icon button" title='Contact'>
       
        </button> 
       
     </Scrollchor>
      <br />


     <Scrollchor to="demo" class="item">
      
      <button class="ui inverted grey mini circular icon button" title='Demo'>
       
        </button> 
      
     </Scrollchor>

</div>
)  

  
export default ButtonScroll;
