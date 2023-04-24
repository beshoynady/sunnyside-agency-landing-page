import React from 'react';
import Navbar from '../navbar/Navbar';
import './Header.css';
import arrow from '../../images/icon-arrow-down.svg';

const Header = () => {
    return (
    <header>
        <Navbar/>
        <div className="header-content">
            <h1>WE ARE CREATIVES</h1>
            <img src={arrow} />
        </div>    
        
    </header>
    )
}

export default Header