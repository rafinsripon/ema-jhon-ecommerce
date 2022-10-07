import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="flex-1">
                <img src={logo} alt="Img Not Found!" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink className='text-whit' to='/'>Shop</NavLink></li>
                    <li><NavLink className='text-white' to='/orders'>Order Review</NavLink></li>
                    <li><NavLink className='text-white' to='/inventory'>Inventory</NavLink></li>
                    <li><NavLink className='text-whit' to='/about'>About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;