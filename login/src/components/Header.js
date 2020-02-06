import React from 'react';
import LoginForm from './LoginForm';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import '../App.css'


export default function Header() {
    return(
        <div className="header">
            <h1>Med Cabinet</h1>
            <div><Link to="/loginform">Log In</Link></div>
            <div><Link to="/signup">Sign Up</Link></div>
        </div>
)}