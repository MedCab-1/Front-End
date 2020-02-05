import React from 'react';
import LoginForm from './components/LoginForm'
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/header';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Display from './components/Display';


export default function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Signup} />
        <PrivateRoute exact path='/display' component={Display} />
      </div>
    </Router>
  );
}

    <div className="App">
          <Header />
        <Route path='loginform' >
          <LoginForm />
        </Route>
        <Route path='signup' >
          <Signup />
          <Route exact path='/' component={Signup} />
        </Route>
          <Footer />
    </div>
  )
  }