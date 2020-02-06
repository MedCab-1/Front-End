import React from 'react';
import LoginForm from './components/LoginForm'
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Signup from './components/Signup';
import './App.css'
import cannabisleaf from './images/cannabis-leaf.png'
import StrainForm from './components/StrainForm';

export default function App() {
  return (
    <div className="App">
      <Header />
        <div><img src={cannabisleaf}/><img src={cannabisleaf}/><img src={cannabisleaf}/><img src={cannabisleaf}/><img src={cannabisleaf}/></div>
           <Route exact path='/login' component={LoginForm} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/strains' component={StrainForm} />
        <div><img src={cannabisleaf}/><img src={cannabisleaf}/><img src={cannabisleaf}/><img src={cannabisleaf}/><img src={cannabisleaf}/></div>
     <Footer />
    </div>
  )
};
