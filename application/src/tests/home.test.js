import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Home from '../views/home/home';


describe('Home Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Home />
    );
  });

          

          it('it should render the logo', () => {
             expect(wrapper.find('svg').length).toBe(1);
          });

          it('it should render the NavBar ', () => {

              expect(wrapper.find('NavBar').length).toBe(1);
           });

            it('it should render the text', () => {
             const item = wrapper.find('h1').first();
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('EMPOWERING GROWTH WITH REAL DATA')
           });


           it('it should render the image to scroll down ', () => {

              expect(wrapper.find('img').length).toBe(2);
            });
         
           
                const tree = renderer.create(
                 <Home />
                          ).toJSON();
                  expect(tree).toMatchSnapshot();
             


});
