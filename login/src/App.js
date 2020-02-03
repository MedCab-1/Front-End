import React from 'react';
import { Route } from 'react-router-dom';
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Route path='/login'>
        <LoginPage />
      </Route>
      <Route path='/register'>
        <RegisterPage />
      </Route>
    </div>
  );
}
