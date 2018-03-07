import React from 'react';
import Enzyme, { shallow } from 'enzyme';
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
            expect(wrapper.length).toBe(1);
	
                });

         it('should render all button', () => {
             expect(wrapper.find('button').length).toBe(6);
          });

          it('should have Links to the pages ', () => {

              expect(wrapper.find('Scrollchor').length).toBe(6);
                });

  describe('shows a links for scroll in the page', () => {

          it('shows a link to Home', () => {
             const link = wrapper.find({to: ''});
             expect(link.length).toEqual(1);
           });

            it('shows a link to Product', () => {
             const link = wrapper.find({to: 'product'});
             expect(link.length).toEqual(1);
           });

           it('shows a link to About', () => {
             const link = wrapper.find({to: 'about'});
             expect(link.length).toEqual(1);
           });

             it('shows a link to Featured', () => {
             const link = wrapper.find({to: 'featured'});
             expect(link.length).toEqual(1);
           });

                it('shows a link to Contact', () => {
             const link = wrapper.find({to: 'contact'});
             expect(link.length).toEqual(1);
           });

              it('shows a link to Demo', () => {
             const link = wrapper.find({to: 'demo'});
             expect(link.length).toEqual(1);
           });


});

               it('renders correctly', () => {
                const tree = renderer.create(
                 <ButtonScroll />
                          ).toJSON();
                  expect(tree).toMatchSnapshot();
                });




});
