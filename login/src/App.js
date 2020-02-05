import React from 'react';
import './App.css';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Signup} />
      </div>
    </Router>
  );
}

export default App;
