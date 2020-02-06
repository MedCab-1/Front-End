import React from 'react';
import LoginForm from './components/LoginForm'
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Signup from './components/Signup';
import StrainForm from './components/StrainForm';
import './App.css'
import cannabisleaf from './images/cannabis-leaf.png'


export default function App() {
  return (
    <div className="App">
      <Header />
      <img src={cannabisleaf}/>       
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/strains' component={StrainForm} />
      <Footer />
    </div>
  )
};
