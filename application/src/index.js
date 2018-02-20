import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';


const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)


ReactDOM.render(

<Provider store={store}>

<App />

  </Provider>,
 document.getElementById('root'));

registerServiceWorker();
