import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../components/Form';
import { Field, reduxForm } from 'redux-form'


describe('Form Component', () => {
        
  let wrapper;
     const handleSubmit = jest.fn();
   

  beforeEach(() => {
    wrapper = shallow(
      <Form 
         handleSubmit={handleSubmit}
        />
    );
  });

   


     describe('Render Form Component', () => {


        it('Should render Form without throwing an error', () => {
  expect(shallow(<Form />).exists(<form className='ui form'></form>)).toBe(true)})
              
         it('render the name input', () => {
          expect(wrapper.find('Field[name="name"]').length), 1

  	 });

         it('render the email input', () => {
  	  expect(wrapper.find('[name="email"]').length), 1
  	 })

         it('render the subject input', () => {
          expect(wrapper.find('[name="subject"]').length), 1
         })

         it('render the phone input', () => {
          expect(wrapper.find('[name="phone"]').length), 1
         })

         it('render the  adresse input', () => {
          expect(wrapper.find('[name="adresse"]').length), 1
         })

          it('render the <SubmitButton /> component', () => {
          (wrapper.find('button[type="submit"]').length, 1);
          });

           it('renders the  <ResetButton /> component', () => {
          (wrapper.find('button[type="reset"]').length, 1);
          });
     
 });              
        


           describe('The user populates the inputs', () => {
                   const name = 'john';
                   const email = 'example@gmail.com';
                   const subject = 'demo';
                   const phone = '1234567890';
                   const adresse = 'my adresse';


    it('should respond to change event and change the state of the Form Component', () => {
    beforeEach(() => {
      
      const input1 = wrapper.find('[name="name"]').first();
      const input2 = wrapper.find('[name="email"]').first();
      const input3 = wrapper.find('[name="subject"]').first();
      const input4 = wrapper.find('[name="phone"]').first();
      const input5 = wrapper.find('[name="adresse"]').first();
      input1.simulate('change', {target: { value: name } });
      input2.simulate('change', {target: { value: email } });
      input3.simulate('change', {target: { value: subject } });
      input4.simulate('change', {target: { value: phone } });
      input5.simulate('change', {target: { value: adresse } });
         expect(wrapper.state().name).toEqual(name);
         expect(wrapper.state().email).toEqual(email);
         expect(wrapper.state().subject).toEqual(subject);
         expect(wrapper.state().phone).toEqual(phone);
         expect(wrapper.state().adresse).toEqual(adresse);

    });
    }); 
    
  });


    
     describe('and then submits the form', () => {
      

      beforeEach(() => {   
    
           
           const form = wrapper.find('form').first();
           form.simulate('submit', { preventDefault: () => {}, });
      });


       

        });

            
         
          
                  

});
