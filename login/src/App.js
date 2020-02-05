import React from 'react';
import './App.css';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Display from './components/Display';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Signup} />
        <PrivateRoute exact path='/display' component={Display} />
      </div>
    </Router>
  );
}

export default App;
