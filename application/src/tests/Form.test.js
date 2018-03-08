import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../components/Form';
import ReactTestUtils from 'react-dom/test-utils';

describe('Form Component', () => {
        
  let wrapper;
     const handleSubmit = jest.fn();
   

  beforeEach(() => {
    wrapper = shallow(
      <Form 
            onSubmit={handleSubmit}
        />
    );
  });

      afterEach(() => {
    
       handleSubmit.mockClear();
  });  


     describe('Render Form Component', () => {


        it('Should render the Form without throwing an error', () => {
          const form = wrapper.find('form').first();
          expect((form).length).toBe(1);
        
         });
        
         it('render the name input', () => {
         
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



          it(' It renders a submit <button />' , () => {
             
              const submit = wrapper.find("button[type='submit']").first();
              expect((submit).length).toBe(1);
          });

           it(' It renders a reset <button /> ', () => {
                
              const reset = wrapper.find("button[type='reset']").first();
              expect((reset).length).toBe(1);
          });
     
               
    });


     describe('the user populates the input', () => {
             const name = 'cats'; 
             const email = 'cat@ss.de';
             const sujet = 'sujet';
             const phone = '1234567890';
             const adresse = 'adresse';
             const item = {name, email, sujet, phone, adresse};

             beforeEach(() => {
                // The form don't have the change props,
                //  we must add the change event to the form to test it
                 wrapper.simulate('change', {target: {name: 'name', value: 'cats'}});
                 wrapper.simulate('change', {target: {name: 'email', value: 'cat@ss.de'}});
                 wrapper.simulate('change', {target: {name: 'subject', value: 'sujet'}});
                 wrapper.simulate('change', {target: {name: 'phone', value: '1234567890'}});
                 wrapper.simulate('change', {target: {name: 'adresse', value: 'adresse'}});
                 wrapper.update();
             });
   
                it('should update the state propretys' , () => {

                     expect(wrapper.state().email.toString()).toEqual(email);
                 });        

          });

   
    
          describe('it should submit the form', () => {
  
            beforeEach(() => {
                 const form = wrapper.find('form').first();
                 expect((form).length).toBe(1);
                 wrapper.simulate('submit');

            });

              
                     it('it calls handleSubmit on form submission', () => {
                      wrapper.simulate('submit');
                     expect(handleSubmit).toHaveBeenCalled();
                   });
            
                     
           
         
            });         
                  
});


