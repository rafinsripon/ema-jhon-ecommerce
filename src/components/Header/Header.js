import React from 'react';
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
                    <li><a className='text-white hover:text-orange-500 bg-none' href='/shop'>Shop</a></li>
                    <li><a className='text-white hover:text-orange-500' href='/order'>Order Review</a></li>
                    <li><a className='text-white hover:text-orange-500' href='/invertory'>Inventory</a></li>
                    <li><a className='text-white hover:text-orange-500' href='/login'>Login</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;