import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from '../redux/store.js';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
   const tree = renderer.create(
    <Provider store={store}><App /></Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
   

});
