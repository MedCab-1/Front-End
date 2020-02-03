import React from 'react';
import Cabinet from '../../src/cabinet.jpg'

export default function Header() {
    return(
        <div>
            <img src={Cabinet} style={{maxWidth: '100%'}} />
        </div>
    )
}