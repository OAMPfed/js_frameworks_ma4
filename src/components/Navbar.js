import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to="/">
                Home
            </Link>
            <br/>
            <Link to="/about">
                About Us
            </Link>
            <br/>
            <Link to="/contact">
                Contact Us
            </Link>
        </div>
    );
}

export default Navbar;
