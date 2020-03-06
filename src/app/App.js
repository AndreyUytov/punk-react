import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import './App.scss';

import store from './../store'
import routes from './../routes'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
            {routes}
        </Router>
      </Provider>
    </div>
  );
}

export default App;
