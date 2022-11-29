import React from 'react';
import './Navbar.css';
import whiteLogo from './muji-logo-white.svg';
//import logo from './muji-logo-white.svg';
// import { Link } from "react-router-dom"; 


const Navbar = () => (
    <div className='nav-container'>
        <div>
            <img src={whiteLogo} alt="Logo" className="white-logo"/>        
        </div>

        <div className="nav-links">
            <a className='nav-element'>Shop</a>
            {/* <Link to="/aromatherapy">Aromatherapy</Link> */}
            <a className='nav-element'> Profile </a>
        </div>        
        
    </div>

);
export default(Navbar)