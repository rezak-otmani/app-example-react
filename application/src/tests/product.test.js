import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Product from '../views/product/product';

describe('Product Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Product />
    );
  });

           it('it should render Product components ', () => {
              expect(wrapper.length).toBe(1);

          });
          
           it('it should render the title', () => {
             const item = wrapper.find('h1').first();
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('OUR TECHNOLOGY')
           });


describe('Fast section', () => {

             it('it shows the Fast title', () => {
             const item = wrapper.find('.content').at(0);
             expect(item.length).toEqual(1);
             expect(item.childAt(1).text()).toBe(' FAST')
           });
             
            it('it shows the Fast paragraphe', () => {
             const item = wrapper.find('.content').at(0);
             expect(item.length).toEqual(1);
             expect(item.childAt(2).exists()).toBe(true)
           });

});


describe('Secure section', () => {

          it('it shows the Secure title ', () => {

             const item = wrapper.find('.content').at(1);
             expect(item.length).toEqual(1);
             expect(item.childAt(1).text()).toBe(' SECURE')
           });
           
             it('it shows the Secure paragraphe', () => {
             const item = wrapper.find('.content').at(1);
             expect(item.length).toEqual(1);
             expect(item.childAt(2).exists()).toBe(true)
           });

 });


describe('Easy section', () => {

          it('it shows the Easy title ', () => {

             const item = wrapper.find('.content').at(2);
             expect(item.length).toEqual(1);
             expect(item.childAt(1).text()).toBe(' EASY')
           });

             it('it shows the Easy paragraphe', () => {
             const item = wrapper.find('.content').at(2);
             expect(item.length).toEqual(1);
             expect(item.childAt(2).exists()).toBe(true)
           });

 });


describe('Image section', () => {

          it('it should render the screen image ', () => {

             const im = wrapper.find('.ui reveal').first();
             expect(im.length).toEqual(1);
             
             const img = wrapper.find('img');
             expect(img.length).toEqual(2);

           });

 });


describe('Button to try demo', () => {

          it('it should render the button to scroll in demo section ', () => {

             const link = wrapper.find({to: 'demo'});
             expect(link.length).toEqual(1);
             expect(link.childAt(0).text()).toBe('Try a demo')

           });

 });


          const tree = renderer.create(
                      <Product />
                          ).toJSON();
                  expect(tree).toMatchSnapshot();



});

