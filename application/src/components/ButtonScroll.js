import React from "react";
import Scrollchor from 'react-scrollchor';


const ButtonScroll= () => (
     

    
   <div className="ui link list"> 
       <Scrollchor to="" className="item">
        <button className="ui inverted grey mini circular icon button" title='Home'>       </button>    
       </Scrollchor>
      <br />

     <Scrollchor to="product" className="item">       
     <button className="ui inverted grey mini circular icon button" title='Product'>
     </button> 
     </Scrollchor>
     <br />
    
      <Scrollchor to="about" className="item">
      <button className="ui inverted grey mini circular icon button" title='About'>
      </button> 
      </Scrollchor>
      <br />
     
      <Scrollchor to="featured" className="item">
    <button className="ui inverted grey mini circular icon button" title='Featured'>
       </button> 
       </Scrollchor>
       <br />


      <Scrollchor to="contact" className="item">
     <button className="ui inverted grey mini circular icon button" title='Contact'>
     </button> 
     </Scrollchor>
      <br />


     <Scrollchor to="demo" className="item">
     <button className="ui inverted grey mini circular icon button" title='Demo'>
     </button> 
     </Scrollchor>

</div>
)  

  
export default ButtonScroll;
