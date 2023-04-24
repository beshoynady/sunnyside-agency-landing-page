import React from 'react';
import './navbar.css';
import logo from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';
import { useState } from 'react';

const Navbar = () => {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    
    return (
        <nav>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <div className='navigation'>
                <ul>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li className='btn'><a href='#'>CONTACT</a></li>
                </ul>
            </div> 
            <div className='mobile-nav' >
                <div className='menu-logo' onClick={handleToggle}>
                    <img src={hamburger}/>
                </div>
                <ul className={`mob-link ${isActive ? '' : 'show'}`}>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li className='btn'><a href='#'>CONTACT</a></li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar