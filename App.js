// navigation
import MyStack from './src/navigation/stacknavigation';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/reduxStore';

export default function App() {
  return (
    <Provider store={store}>
          <MyStack/>
    </Provider>

  );
}

