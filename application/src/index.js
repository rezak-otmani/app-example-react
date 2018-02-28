import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import store from './redux/store.js';



ReactDOM.render(

 <Provider store={store}>
     
     <App />
      
  </Provider>,
  document.getElementById('root')

);

registerServiceWorker();
