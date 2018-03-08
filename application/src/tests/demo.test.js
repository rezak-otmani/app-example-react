import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Demo from '../views/demo/demo';
import { Provider } from "react-redux";
import store from '../redux/store.js';

describe('Demo Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Demo />
    );
  });

           it('it should render Demo components ', () => { 
              expect(wrapper.length).toBe(1);

          });
          
           it('it should render the title', () => {
             const item = wrapper.find('.content').at(0);
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('REQUEST DEMO')
           });

        
describe('Form section', () => {

          it('it should render the form demo', () => {
               const form = wrapper.find('Form').first();
               expect((form).length).toBe(1);
 
          });

});

describe('Logo section', () => {

          it('it should render the logo ', () => {

              expect(wrapper.find('svg').length).toBe(1);
           });


});

describe('LINKS section', () => {
           
            it('it shows a list of links ', () => {
             const link = wrapper.find('.content').at(1);
             expect(link.length).toEqual(1);
             expect(link.childAt(0).text()).toBe('LINKS')
           });  
      

            it('shows a link to Home', () => {
             const link = wrapper.find({to: ''});
             expect(link.length).toEqual(1);
             expect(link.childAt(0).text()).toBe('Home ')
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


describe('ABOUT section', () => {

             it('it shows about section ', () => {
             const item = wrapper.find('.content').at(2);
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('ABOUT')
              });

           it('shows item mail ', () => {
             const item = wrapper.find('.item').at(6);
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('info@mysite.com ')
           });
           
            it('shows item tel', () => {
             const item = wrapper.find('.item').at(8);
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('Tel: 123-456-7890')
           });

            it('shows item adresse ', () => {
             const item = wrapper.find('.item').at(9);
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('500 Terry Francois Street')
           });

             

});

describe('SOCIAL section', () => {

             it('it shows the social buttons ', () => {
             const item = wrapper.find('.content').at(3);
             expect(item.length).toEqual(1);
             expect(item.childAt(0).text()).toBe('SOCIAL')
            });

           it('shows the facebook icon ', () => {
             const item = wrapper.find('.facebook icon').first();
             expect(item.length).toEqual(1);
           });

           it('shows the twitter icon ', () => {
             const item = wrapper.find('.twitter icon').first();
             expect(item.length).toEqual(1);
           });


             it('shows the linkedin icon', () => {
             const item = wrapper.find('.linkedin icon').first();
             expect(item.length).toEqual(1);
           });

           
             it('shows the google plus icon', () => {
             const item = wrapper.find('.google plus icon').first();
             expect(item.length).toEqual(1);
           });

});

          
           const tree = renderer.create(
              <Provider store={store}>
                      <Demo />
               </Provider>
                          ).toJSON();
                  expect(tree).toMatchSnapshot();
               



});

