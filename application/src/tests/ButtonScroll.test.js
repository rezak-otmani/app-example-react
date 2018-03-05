import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ButtonScroll from '../components/ButtonScroll';


describe('ButtonScroll Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ButtonScroll />
    );
  });

        it('it should render ButtonScroll components ', () => {
                });

         it('should render all button', () => {
             expect(wrapper.find('button').length).toBe(6);
          });

          it('should have Links to the pages ', () => {

              expect(wrapper.find('Scrollchor').length).toBe(6);
                });



});
