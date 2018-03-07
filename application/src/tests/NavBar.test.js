import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';


describe('NavBAr Component', () => {

  let wrapper;
 
  beforeEach(() => {
    wrapper = shallow(
      <NavBar />
    );
  });

        it('it should render NavBar ', () => {
   
              expect(wrapper.length).toBe(1);
		});

         it('should render all items for menu', () => {
        
             expect(wrapper.find('Scrollchor').length).toBe(6);
		});
        
         it('should have one active class item', () => {
             expect(wrapper.find('.active').length).toBe(1); 
          });
  
    describe('shows a links to scroll in the page', () => {


          it('shows a link to Home', () => {
             const link = wrapper.find({to: ''});
             expect(link.length).toEqual(1);
             expect(link.childAt(0).text()).toBe('Home')
           });
 
            it('shows a link to Product', () => {
             const link = wrapper.find({to: 'product'});
             expect(link.length).toEqual(1);
             expect(link.childAt(0).text()).toBe('Product')
           });

           it('shows a link to About', () => {
             const link = wrapper.find({to: 'about'});
             expect(link.length).toEqual(1);
             expect(link.childAt(0).text()).toBe('About')
           }); 

             it('shows a link to Featured', () => {
             const link = wrapper.find({to: 'featured'});
             expect(link.length).toEqual(1);
             expect(link.childAt(0).text()).toBe('Featured')
           });

                it('shows a link to Contact', () => {
             const link = wrapper.find({to: 'contact'});
             expect(link.length).toEqual(1);
             expect(link.childAt(0).text()).toBe('Contact')
           });

              it('shows a link to Demo', () => {
             const link = wrapper.find({to: 'demo'});
             expect(link.length).toEqual(1);
             expect(link.childAt(0).text()).toBe('Demo')
           });


});

              it('renders correctly', () => {
                const tree = renderer.create(
                 <NavBar />
                          ).toJSON();
                  expect(tree).toMatchSnapshot();
                });


});
