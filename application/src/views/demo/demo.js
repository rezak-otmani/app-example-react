import React, {Component} from 'react';
import Form from '../../components/Form';
import Scrollchor from 'react-scrollchor';
import showResults from '../../containers/showResults';
class Demo extends Component {

render () {
 return (
 
 <div className="pusher">
  <div className="ui vertical masthead center aligned segment">
         
     <div className="center aligned column">
          <h1 className="ui  header">
              
              <div className="content">
                    REQUEST DEMO
                     <div className="sub header">
                      
                    <h2> Please fill your contact details below:</h2>   
                    </div> 
                    </div>
           </h1>
           </div>
           <div className="row">   
           <div className="ui container">
               <Form onSubmit={showResults} />
            </div>
            </div>
          <br/>



                                <div className="ui vertical olive inverted footer segment">
                                    <div className="ui seven columns center aligned stackable grid">
                                            <div className="three wide column">                 
             				              <a href="" target="_self" tabIndex="-1">
                         				 <svg className = "logo" xmlns="http://www.w3.org/2000/svg" viewBox="-7.7116809713429575 -16.75102391736263 313.60835950127966 385.58404856714714"
								 role="img" preserveAspectRatio="xMidYMid meet">
                          						   <g className ="stylesvgbottom">
                             							     <path d="M298.185 264.061l-149.093 88.021L0 264.061V88.021L149.092 0l149.093 88.021v176.04z"></path>
                                  							    <text x="150" y="190" ><tspan>DATO</tspan></text>
                            						   </g>
                         				  </svg>
                     				 </a>

                     			      </div> 
 
                                              <div className="two wide column">
                                                      <h2 className="ui left aligned header">
                                                              <div className="ui divider"></div>
                                                           	   <div className="content">
                                                           		 LINKS
                                                            		 <div className="sub header">
                                                             			 <div className="ui link list">
                                                              				<br />
                                    							 <Scrollchor to=""  className="item active">Home </Scrollchor>
                                    							 <Scrollchor to="product" className="item">Product</Scrollchor>
                                    							  <Scrollchor to="about" className="item">About</Scrollchor>
                                    							  <Scrollchor to="featured" className="item">Featured</Scrollchor>
                                    							  <Scrollchor to="contact" className="item">Contact</Scrollchor>
                                     							  <Scrollchor to="demo" className="item">Demo</Scrollchor>                                   
						          			   </div>
                                                            		 </div>
                                                            	    </div>
                                                        </h2>
                                               </div>


                                               <div className="two wide column">
                                                      <h2 className="ui left aligned header">
                                                          <div className="ui divider"></div>
                                                               <div className="content">
                                                                    ABOUT
                                                                    <div className="sub header">
                                                          		     <div className="ui link list">
                                                                		 <br />
                                                                		 <a href="" className="item">info@mysite.com </a>
                                                                		 <a href="" className="item">info@mysite.com</a>
                                                                		 <p className="item">Tel: 123-456-7890</p>
                                                                		 <p className="item">500 Terry Francois Street</p>
                                                               			 <p className="item">San Francisco, CA 94158</p>
                                                           	   </div>
                                                                </div>
                                                             </div>     
                                                        </h2>
                                               </div>
                                                               
                                               <div className="two wide column">
                                                        <h2 className="ui left aligned header">
                                                              <div className="ui divider"></div>
                                                       		       <div className="content">
                                                         		    SOCIAL
                                                            			 <div className="sub header">
                                                            			    <br /> 
								   			 <button className="ui circular facebook icon button">
  												<i className="facebook icon"></i>
								   			 </button>
								   			 <button className="ui circular twitter icon button">
									 			 <i className="twitter icon"></i>
								  			 </button>
								 			 <button className="ui circular linkedin icon button">
  									  			<i className="linkedin icon"></i>
							        			 </button>
								 			 <button className="ui circular google plus icon button">
												  <i className="google plus icon"></i>
								 			 </button>                                   
                                                           			     </div>
                                                            		 </div>     
                                                             </h2>
                                                  </div>
                                                     
                                      
                                </div>
                         </div>
                        			 <div className="ui vertical wide left aligned segment">
                    					    © 2018 by Rezak. App created with ReactJS
                        			 </div>
    </div>
</div>

);
}}
export default Demo
;
