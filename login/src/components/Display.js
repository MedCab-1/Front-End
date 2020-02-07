import React from 'react';
// import Header from './Header';
import StrainSearch from './StrainSearch';
import Logout from './Logout'

//  import SearchBar to this page once ready

import '../App.css';

const Display = () => {
    return (
        <div>
            <StrainSearch />
            <Logout />
        </div>
    );
};

export default Display;