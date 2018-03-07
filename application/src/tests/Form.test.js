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



          it(' It renders a submit <button />' , () => {
             
              const submit = wrapper.find("button[type='submit']").first();
              expect((submit).length).toBe(1);
          });

           it(' It renders a reset <button /> ', () => {
                
              const reset = wrapper.find("button[type='reset']").first();
              expect((reset).length).toBe(1);
          });
     
               
   

           

 




   
    
          describe('and then submits the form', () => {

            beforeEach(() => {
           const submit = wrapper.find("button[type='submit']").first();
           const node = ("button[type='submit']");
           ReactTestUtils.Simulate.click(node);

         });
         });
            
         
});         
                  
});


