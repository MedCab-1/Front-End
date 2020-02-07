import React, { useState } from "react";
import axios from "axios";
import { userLogout } from "../Actions";

const Logout = (props) => {
    const [logout, setLogout] = useState({ username: '', password: ''});

    const handleSubmit = e => {
        e.preventDefault();
        userLogout(logout)

        axios.get('https://med-cab-backend.herokuapp.com/api/user/logout')
            .then(res => {
                localStorage.removeItem('token', res.data.payload)
            })
    }
    return (
        <div>
            <button type='submit' onClick={handleSubmit}>Logout</button>
        </div>
    )
} 
export default Logout;