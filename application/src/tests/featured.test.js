import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Featured from '../views/featured/featured';


describe('Featured Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Featured />
    );
  });

           it('it should render Featured components ', () => {
              expect(wrapper.length).toBe(1);

          });

           it('it should render the title', () => {
             const item = wrapper.find('h1').first();
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('USING DATO')
           });
            
           it('it should render images', () => {
             const item = wrapper.find('img');
             expect(item.length).toEqual(6);
           });

           const tree = renderer.create(
                      <Featured />
                          ).toJSON();
                  expect(tree).toMatchSnapshot();


});
