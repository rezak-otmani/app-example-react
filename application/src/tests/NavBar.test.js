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

});
