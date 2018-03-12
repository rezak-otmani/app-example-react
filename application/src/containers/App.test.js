import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from '../redux/store.js';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('App Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});


           it('it should render the Home section', () => {
             const home = wrapper.find('Home').first();
             expect(home.length).toEqual(1);
           });
           
           it('it should render the Product section', () => {
             const home = wrapper.find('Product').first();
             expect(home.length).toEqual(1);
           });

            it('it should render the About section', () => {
             const about = wrapper.find('About').first();
             expect(about.length).toEqual(1);
           });

             it('it should render the Featured section', () => {
             const featured = wrapper.find('Featured').first();
             expect(featured.length).toEqual(1);
           });

            it('it should render the Contact section', () => {
             const contact = wrapper.find('Contact').first();
             expect(contact.length).toEqual(1);
           });
           
             it('it should render the Demo section', () => {
             const demo = wrapper.find('Demo').first();
             expect(demo.length).toEqual(1);
           });

             it('it should render the ButtonScroll component', () => {
             const btscroll = wrapper.find('ButtonScrol').first();
             expect(btscroll.length).toEqual(1);
           });



   const tree = renderer.create(
    <Provider store={store}><App /></Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
   

});
