import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Demo from '../views/demo/demo';


describe('Home Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Demo />
    );
  });

           it('it should render ButtonScroll components ', () => { 
              expect(wrapper.length).toBe(1);

          });

          it('it should render the form demo', () => {
               const form = wrapper.find('Form').first();
               expect((form).length).toBe(1);
 
          });

          it('it should render the logo ', () => {

              expect(wrapper.find('svg').length).toBe(1);
           });

           
    

});

