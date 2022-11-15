import React from 'react';
import './Navbar.css';
//import logo from './muji-logo-white.svg';
import { Link } from "react-router-dom"; 


const Navbar = () => (
    <div className='nav-container'>
        {/* <img src={logo} alt="Logo"/> */}
        <h1 className='nav-element'> Muji </h1>
        <a className='nav-element'>Shop</a>
        <Link to="/aromatherapy">Aromatherapy</Link>
        <a className='nav-element'> Profile </a>
    </div>

);
export default(Navbar)