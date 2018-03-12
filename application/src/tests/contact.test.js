import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Contact from '../views/contact/contact';


describe('Contact Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Contact />
    );
  });


            it('it should render the title', () => {
             const item = wrapper.find('h1').first();
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('GET IN TOUCH')
           });


           it('it should render Contact section ', () => {
              expect(wrapper.length).toBe(1);

          });

             
           
 describe('Contact information section', () => {


           it('shows item mail ', () => {
             const item = wrapper.find('.item').at(0);
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('info@mysite.com ')
           });
           
            it('shows item tel', () => {
             const item = wrapper.find('.item').at(2);
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('Tel: 123-456-7890')
           });

            it('shows item adresse ', () => {
             const item = wrapper.find('.item').at(4);
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('500 Terry Francois Street')
           });

             

});


describe('Map section', () => {
         
      it('it should render the map component', () => {
             const map = wrapper.find('MapContainer').first();
             expect(map.length).toEqual(1);
           });
});


           const tree = renderer.create(
                      <Contact />
                          ).toJSON();
                  expect(tree).toMatchSnapshot();


});
