import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Comp/Main';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux'
import store from './Redux/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Provider store={store} >
    <Main />
  </Provider>

);

