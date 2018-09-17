import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers';


export default ({ children, initialState={} }) => {
  const middleware = applyMiddleware(reduxThunk);
  const store = createStore(reducers, initialState, composeWithDevTools(middleware));
  return (
    <Provider store={store}>
      { children }
    </Provider>
  );
};