import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Signup from './Signup';
import { Link, useHistory } from 'react-router-dom';
import { Collapse, CardBody, CardText } from 'reactstrap';
import '../App.css';
import {userLogout} from '../Actions/index';
import {connect} from 'react-redux';

const Header = ({userLogout, userLogin}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const history = useHistory();
    const logout = e => {
        e.preventDefault();
        userLogout();
        history.push('/login')
    };
    return(
        <div className="header" style={{justifyContent: "left"}}>
            <div className="nav">
                <div><Link to="/loginform">Log In</Link></div>
                <div><Link to="/signup">Sign Up</Link></div>
                <button onClick={logout}>Logout</button>
            </div>
            <h1 className="head">Med Cabinet</h1>
        </div>
)}
function mapStateToProps(state) {
    return {
        userLogin: state.userLogin
    }
}
export default connect(mapStateToProps, { userLogout})(Header)

// import React, { useState } from 'react';
// import LoginForm from './LoginForm';
// import Signup from './Signup';
// import { Link } from 'react-router-dom';
// import { Collapse, CardBody, CardText } from 'reactstrap';
// import '../App.css';


// export default function Header() {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggle = () => setIsOpen(!isOpen);
//     return(
//         <div className="header" style={{justifyContent: "left"}}>
//             <div className="nav">
//                 <div><Link to="/loginform">Log In</Link></div>
//                 <div><Link to="/signup">Sign Up</Link></div>
//             </div>
//             <h1 className="head">Med Cabinet</h1>
//         </div>
// )}

