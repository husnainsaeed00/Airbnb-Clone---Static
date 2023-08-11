import React from 'react';
import airbnb1 from './airbnb1.png';


export default function Navbar(){
    return(
        <nav>
            <img src={airbnb1} alt="airbnb1" className='nav--logo'/>
        </nav>
    )
}