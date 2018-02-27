import React, {Component} from 'react';
import Form from '../../components/Form';
import Scrollchor from 'react-scrollchor';

class Demo extends Component {

render () {
 return (
  
 <div class="pusher">
  <div class="ui vertical masthead center aligned segment">
         
      
          <h1 class="ui  header">
              
              <div class="content">
                    REQUEST DEMO
                     <div class="sub header">
                      
                    <h2> Please fill your contact details below:</h2>   
                    </div> 
                    </div>
           </h1>
 
        <div class="row">
        <div class="ui container">
        <Form />
       </div>
        </div>
          <br/>



                                <div class="ui vertical olive inverted footer segment">
		                         
                                    <div class="ui seven columns center aligned stackable grid">
                                                                                                                           <div class="three wide column">       
                      <a href="" target="_self" tabindex="-1">
                           <svg class = "logo" xmlns="http://www.w3.org/2000/svg" viewBox="-7.7116809713429575 -16.75102391736263 313.60835950127966 385.58404856714714" role="img" preserveAspectRatio="xMidYMid meet">
                             <g class ="stylesvgbottom">
                                  <path d="M298.185 264.061l-149.093 88.021L0 264.061V88.021L149.092 0l149.093 88.021v176.04z"></path>
                                      <text x="150" y="190" ><tspan>DATO</tspan></text>
                             </g>
                           </svg>
                      </a>



                      </div>  
                                                      <div class="two wide column">
                                                             <h2 class="ui left aligned header">
                                                              <div class="ui divider"></div>
                                                              <div class="content">
                                                            LINKS
                                                             <div class="sub header">
                                                              <div class="ui link list">
                                                              <br />
                                     <Scrollchor to=""  class="item active">Home </Scrollchor>
                                     <Scrollchor to="product" class="item">Product</Scrollchor>
                                      <Scrollchor to="about" class="item">About</Scrollchor>
                                     <Scrollchor to="featured" class="item">Featured</Scrollchor>
                                     <Scrollchor to="contact" class="item">Contact</Scrollchor>
                                      <Scrollchor to="demo" class="item">Demo</Scrollchor>
                                                                  
						             </div>
                                                             </div>
                                                             </div>
                                                             </h2>
                                                      </div>


                                                      <div class="two wide column">
                                                             <h2 class="ui left aligned header">
                                                              <div class="ui divider"></div>
                                                              <div class="content">
                                                             ABOUT
                                                             <div class="sub header">
                                                              <div class="ui link list">
                                                                 <br />
                                                                 <a href="" class="item">info@mysite.com </a>
                                                                 <a href="" class="item">info@mysite.com</a>
                                                                 <p class="item">Tel: 123-456-7890</p>
                                                                 <p class="item">500 Terry Francois Street</p>
                                                                 <p class="item">San Francisco, CA 94158</p>

                                                             </div>
                                                             </div>
                                                             </div>     
                                                             </h2>
                                                       </div>
                                                               
                                                        <div class="two wide column">
                                                             <h2 class="ui left aligned header">
                                                              <div class="ui divider"></div>
                                                              <div class="content">
                                                             SOCIAL
                                                             <div class="sub header">
                                                             <br /> 
								    <button class="ui circular facebook icon button">
  									<i class="facebook icon"></i>
								    </button>
								    <button class="ui circular twitter icon button">
									  <i class="twitter icon"></i>
								   </button>
								   <button class="ui circular linkedin icon button">
  									  <i class="linkedin icon"></i>
							          </button>
								  <button class="ui circular google plus icon button">
									  <i class="google plus icon"></i>
								  </button>                                   
                                                             </div>
                                                             </div>     
                                                             </h2>
                                                       </div>
                                                     
                                      
                                          </div>
                         </div>
                         <div class="ui vertical wide left aligned segment">
                        © 2018 by Rezak. App created with ReactJS
                         </div>
</div>
</div>

);
}}
export default Demo
;
