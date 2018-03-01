import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../components/Form';



describe('Form Component', () => {
         
       const wrapper = shallow(<Form />);

          it('Should render Form without throwing an error', () => {
  expect(shallow(<Form />).exists(<form className='ui form'></form>)).toBe(true) 	  })
               
         it('render the name input', () => {
   	 expect(shallow(<Form />).find('[name="name"]').length), 1
  	 })

         it('render the email input', () => {
  	  expect(shallow(<Form />).find('[name="email"]').length), 1
  	 })

         it('render the subject input', () => {
          expect(shallow(<Form />).find('[name="subject"]').length), 1
         })

         it('render the phone input', () => {
          expect(shallow(<Form />).find('[name="phone"]').length), 1
         })

         it('render the  adresse input', () => {
          expect(shallow(<Form />).find('[name="adresse"]').length), 1
         })

          it('render the <SubmitButton /> component', () => {
          (wrapper.find('button[type="submit"]').length, 1);
          });

           it('renders the  <ResetButton /> component', () => {
          (wrapper.find('button[type="reset"]').length, 1);
          });
     
               
        
    describe('The user populates the inputs', () => {
                 const item_name = 'john doe';
                  const item_mail = 'blah@gmail.com';
                  const item_subject = 'demo';
                   const item_phone = '1234567890';
                   const item_adresse = 'my adresse';

       it(' populate name input', () => {
           const input = wrapper.find('[name="name"]');
           wrapper.simulate('change', {
           target: { value: item_name }
        })
        })

          it(' populate email input', () => {
           const input = wrapper.find('[name="email"]');
           wrapper.simulate('change', {
           target: { value: item_mail }
        })
        })


         it(' populate subject input', () => {
           const input = wrapper.find('[name="subject"]');
           wrapper.simulate('change', {
           target: { value: item_subject }
        })
        })

        it(' populate phone input', () => {
           const input = wrapper.find('[name="phone"]');
           wrapper.simulate('change', {
           target: { value: item_phone }
        })
       })

         it(' populate adresse input', () => {
           const input = wrapper.find('[name="adresse"]');
           wrapper.simulate('change', {
           target: { value: item_adresse }
        })
      })
   

      })
 



   })




