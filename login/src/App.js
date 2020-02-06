import React from 'react';
import LoginForm from './components/LoginForm'
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Signup from './components/Signup';
import './App.css'
import cannabisleaf from './images/cannabis-leaf.png'

export default function App() {
  return (

    <div className="App">
          <Header />
          <div><img src={cannabisleaf}/><img src={cannabisleaf}/><img src={cannabisleaf}/><img src={cannabisleaf}/><img src={cannabisleaf}/></div>
        <Route path='/LoginForm' >
          <LoginForm />
        </Route>
        <Route path='/Signup' >
          <Signup />
        </Route>
        <div><img src={cannabisleaf}/><img src={cannabisleaf}/><img src={cannabisleaf}/><img src={cannabisleaf}/><img src={cannabisleaf}/></div>
          <Footer />
    </div>
  )
  }