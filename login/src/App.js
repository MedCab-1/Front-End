import React from 'react';
import LoginForm from './components/LoginForm'
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/header';
import './App.css';

export default function App() {
  return (
    <div className="App">
          <Header />
        <Route path='loginform' >
          <LoginForm />
        </Route>
        <Route path='signup' >
          <Signup />
        </Route>
          <Footer />
    </div>
  );
}
