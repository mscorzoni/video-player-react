import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';
import App from './components/app';
import reducers from './reducers';
import REACT_APP_GOOGLE_API_KEY from '.././env';




const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = REACT_APP_GOOGLE_API_KEY;



YTSearch({key: API_KEY, term: 'surfboars'}, (data) => {
  console.log(data);
});


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
