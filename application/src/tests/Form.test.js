import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../components/Form';
import { Provider } from "react-redux";
import store from '../redux/store.js';


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

           

                  const tree = renderer.create(
                    <Provider store={store}>
                        <Form 
                               onSubmit={handleSubmit}
                         />
                     </Provider>
                                   ).toJSON();
                     expect(tree).toMatchSnapshot(); 
                               
});


