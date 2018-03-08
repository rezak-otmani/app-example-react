import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import About from '../views/about/about';


describe('About Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <About />
    );
  });

           it('it should render About components ', () => {
              expect(wrapper.length).toBe(1);

          });

           it('it should render the title', () => {
             const item = wrapper.find('h1').first();
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('MEET DATO')
           });


 describe('Story section', () => {

         it('it shows the Story image', () => {
             const item = wrapper.find('img').at(0);
             expect(item.length).toEqual(1);
           });
          
           it('it shows a divider', () => {
             const item = wrapper.find('h2').at(0);
             expect(item.childAt(0).hasClass('ui divider')).toBe(true);
           });


         it('it shows the Story title', () => {
             const item = wrapper.find('.content').at(0);
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('OUR STORY')
           });

         it('it shows the Story paragraphe', () => {
             const item = wrapper.find('.content').at(0);
             expect(item.length).toEqual(1);
             expect(item.childAt(2).exists()).toBe(true)
           });

});


 describe('Vision section', () => {

         it('it shows the vision image', () => {
             const item = wrapper.find('img').at(1);
             expect(item.length).toEqual(1);
           });
             
             it('it shows a divider', () => {
             const item = wrapper.find('h2').at(1);
             expect(item.childAt(0).hasClass('ui divider')).toBe(true);
           });

             it('it shows the vision title', () => {
             const item = wrapper.find('.content').at(1);
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('OUR VISION')
           });

            it('it shows the vision paragraphe', () => {
             const item = wrapper.find('.content').at(1);
             expect(item.childAt(2).exists()).toBe(true)
           });

});

 describe('Technology section', () => {

         it('it shows the technology image', () => {
             const item = wrapper.find('img').at(2);
             expect(item.length).toEqual(1);
           });
              
           it('it shows a divider', () => {
             const item = wrapper.find('h2').at(2);
             expect(item.childAt(0).hasClass('ui divider')).toBe(true);
           });

             it('it shows the technology title', () => {
             const item = wrapper.find('.content').at(2);
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('OUR TECHNOLOGY')
           });

            it('it shows the technology paragraphe', () => {
             const item = wrapper.find('.content').at(2);
             expect(item.childAt(2).exists()).toBe(true)
           });

});

                     const tree = renderer.create(
                      <About />
                          ).toJSON();
                  expect(tree).toMatchSnapshot();
                    
  
});

