import React from 'react';

import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    
    return (
        <div className="nav-container">
            <div className="navbar">
                <div className="container-fluid">
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Services">Services</Link>
                <Link to="/Contact">Contact Us</Link>
                </div>

        </div>
    </div>
        
    );
};

export default Header;