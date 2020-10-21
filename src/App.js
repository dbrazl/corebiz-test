import React from 'react';

import './config/reactotronConfig';

import { Provider } from 'react-redux';
import store from '~/store/index';

import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Home />
    </Provider>
  );
}

export default App;
