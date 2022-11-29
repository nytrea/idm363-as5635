import React from 'react';
import './Navbar.css';
import whiteLogo from './muji-logo-white.svg';
//import logo from './muji-logo-white.svg';
import { NavLink } from 'react-router-dom'; 


const Navbar = () => (
    <div className='nav-container'>
        <div>
            <img src={whiteLogo} alt="Logo" className='white-logo'/>        
        </div>

        <div className='nav-links'>
            {/* <NavLink to='/' className={'nav-element'}>Home</NavLink>
            <NavLink to='/admin' className={'nav-element'}>Admin</NavLink> */}
            <a className='nav-element'> Admin </a>
            <a className='nav-element'> Cart </a>
        </div>    

    </div>

);
export default(Navbar)