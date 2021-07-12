import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';

function Navbar() {
    return (
        <div className="nav-container">
            <nav>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/services">
                    Services
                </NavLink>
                <NavLink to="/about-us">
                    About
                </NavLink>
                <NavLink to="/contact-us">
                    Contact
                </NavLink>
                <NavLink to="/frequently-asked-questions">
                    FAQs
                </NavLink>
              
            </nav>
        </div>
    )
}

export default Navbar
