import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import "../StyleSheets/Header.css"

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <div className='box'>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {isOpen && (
                <div className="menu">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/pages">Pages</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
