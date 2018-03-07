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

           it('it should render ButtonScroll components ', () => {     
              expect(wrapper.length).toBe(1);

          });

          it('it should render the logo', () => {
             expect(wrapper.find('svg').length).toBe(1);
          });

          it('it should render the NavBar ', () => {

              expect(wrapper.find('NavBar').length).toBe(1);
           });

           it('it should render the image to scroll down ', () => {

              expect(wrapper.find('img').length).toBe(2);
            });
         
            it('renders correctly', () => {
                const tree = renderer.create(
                 <Home />
                          ).toJSON();
                  expect(tree).toMatchSnapshot();
             });


});
