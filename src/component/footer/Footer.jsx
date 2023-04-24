import React from 'react'
import logo from '../../images/logo.svg';
import facebook from '../../images/icon-facebook.svg';
import instagram from '../../images/icon-instagram.svg';
import pinterst from '../../images/icon-pinterest.svg';
import twitter from '../../images/icon-twitter.svg';
import './Foote.css';
const Footer = () => {
    return (
        <div className='footer'>
            <a><img className='logo' src={logo}/></a>
            <logo fill='red'/>
            <ul className='links'>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Projects</a></li>
            </ul>
            <ul className='icon'>
                <li><img src={facebook}/></li>
                <li><img src={instagram}/></li>
                <li><img src={twitter}/></li>
                <li><img src={pinterst}/></li>
            </ul>
        </div>
    )
}

export default Footer