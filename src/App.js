import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import {store} from './store'
import routes from './routes'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>15/02/20</h1>
      </header>
      <Provider store={store}>
        <Router>
            {routes}
        </Router>
      </Provider>
    </div>
  );
}

export default App;
