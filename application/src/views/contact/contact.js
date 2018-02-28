import React, {Component} from 'react';
import MapContainer from '../../components/MapContainer';


class Contact extends Component {

render () {
 return (

       
 <div className="pusher">
  <div className="ui vertical olive inverted masthead center aligned segment">

                             <div className="center aligned column">
                                      <div className="ui sizer vertical segment">
                                            <h1 className="ui huge header">GET IN TOUCH</h1>
                                      </div>
                             </div>
                             <div className="ui seven columns center aligned stackable divided equal height stackable grid">   
                                          <div className="three wide column">
                                               <div className="ui link list">
                                                   <a href="" className="item">info@mysite.com </a>
                                                   <a href="" className="item">info@mysite.com</a>
                                               </div>
                                           </div>
                                            

                                               <div className="three wide column">
                                                  <div className="ui link list">
                                                      <a href="" className="item">Tel: 123-456-7890</a>
                                                     <a href="" className="item">Fax: 123-456-7890</a>
                                                   </div>
                                               </div> 
                                              
                                              
                                                <div className="three wide column">
                                                   <div className="ui link list">
                                                    <p className="item">500 Terry Francois Street</p>
                                                    <p className="item">San Francisco, CA 94158</p>
                                                   </div>
                                            </div>
                                   </div>

      
				<div className="ui billboard test ad" data-text="">
      					 <MapContainer />
     			      </div>         
   

   </div>          
 </div>
);
}}
export default Contact;
