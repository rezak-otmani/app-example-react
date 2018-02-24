import React, {Component} from 'react';
import MapContainer from '../../components/MapContainer';


class Contact extends Component {

render () {
 return (

        
 <div class="pusher">
  <div class="ui vertical olive inverted masthead center aligned segment">

                             <div class="center aligned column">
                                      <div class="ui sizer vertical segment">
                                            <h1 class="ui huge header">GET IN TOUCH</h1>
                                      </div>
                             </div>
                              <div class="ui seven columns center aligned stackable divided equal height stackable grid">                  
                                          <div class="three wide column">
                                               <div class="ui link list">
                                                   <a href="" class="item">info@mysite.com </a>
                                                    <a href="" class="item">info@mysite.com</a>
                                               </div>
                                          </div> 
                                       
                                          <div class="three wide column">
                                                  <div class="ui link list">
                                                      <a href="" class="item">Tel: 123-456-7890</a>
                                                     <a href="" class="item">Fax: 123-456-7890</a>
                                                   </div>
                                           </div> 
                                                                             
                                            <div class="three wide column">
                                                   <div class="ui link list">
                                                    <p class="item">500 Terry Francois Street</p>
                                                    <p class="item">San Francisco, CA 94158</p>
                                                   </div>
                                            </div>
                                   </div>

      
       <div class="ui embed" data-source="google" data-id="" data-placeholder="">
        <MapContainer />
       
       </div>         
   

</div>          
</div>
);
}}
export default Contact;
