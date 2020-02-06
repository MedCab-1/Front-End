import React from 'react';
import LoginForm from './components/LoginForm'
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Signup from './components/Signup';
import StrainForm from './components/StrainForm';


export default function App() {
  return (
    <div className="App">
      <Header />       
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/strains' component={StrainForm} />
      <Footer />
          {/* <Header />
        <Route path='/LoginForm' >
          <LoginForm />
        </Route>
        <Route path='/Signup' >
          <Signup />
        </Route>
          <Footer /> */}
    </div>
  )
};
