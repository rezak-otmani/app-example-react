import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../components/Form';


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
              
         it('render the ame input', () => {
         
          const name = wrapper.find("Field[name='name']").first();
          expect((name).length).toBe(1);

  	 });
         
         it('render the email input', () => {

           const email = wrapper.find("Field[name='email']").first();
           expect((email).length).toBe(1);

  	 })

         it('render the subject input', () => {
            
            const subject = wrapper.find("Field[name='subject']").first();
            expect((subject).length).toBe(1);
         })

         it('render the phone input', () => {
            
            const phone = wrapper.find("Field[name='phone']").first();
            expect((phone).length).toBe(1);
         })

         it('render the  adresse input', () => {
              
              const adresse = wrapper.find("Field[name='adresse']").first();
              expect((adresse).length).toBe(1);
         })

          it('render the <SubmitButton /> component', () => {
             
              const submit = wrapper.find("button[type='submit']").first();
              expect((submit).length).toBe(1);
          });

           it('renders the  <ResetButton /> component', () => {
                
              const reset = wrapper.find("button[type='reset']").first();
              expect((reset).length).toBe(1);
          });
     
               
        


 describe('The user populates the inputs', () => {
            
            const name = 'john';
                   const email = 'example@gmail.com';
                   const subject = 'demo';
                   const phone = '1234567890';
                   const adresse = 'my adresse';

beforeEach(() => {
     const name = wrapper.find("Field[name='name']").first();
               
          
      const input1 = wrapper.find("Field[name='name']").first();
      const input2 = wrapper.find("Field[name='email']").first();
      const input3 = wrapper.find("Field[name='subject']").first();
      const input4 = wrapper.find("Field[name='phone']").first();
      const input5 = wrapper.find("Field[name='adresse']").first();
        
      
     
      input1.simulate('change', {target: { value: name } });
      input2.simulate('change', {target: { value: email } });
      input3.simulate('change', {target: { value: subject } });
      input4.simulate('change', {target: { value: phone } });
      input5.simulate('change', {target: { value: adresse } });
        
});         

  it('should respond to change event and change the state of the Form component', () => {

         expect(wrapper.state().name).toEqual(name);
         expect(wrapper.state().email).toEqual(email);
         expect(wrapper.state().subject).toEqual(subject);
         expect(wrapper.state().phone).toEqual(phone);
         expect(wrapper.state().adresse).toEqual(adresse);
        
   
    }); 
    
  });


    
     describe('and then submits the form', () => {
      

           beforeEach(() => {
        const form = wrapper.find('form').first();
        form.simulate('submit', {
          preventDefault: () => {},
        });
      });
    
             
     

        });

            
         
          
                  
});
});
