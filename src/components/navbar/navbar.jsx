import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // 🔥 Universal scroll function
    const scrollToSection = (id) => {
        closeMenu();

        if (window.location.pathname !== "/") {
            // Other pages → Go to Home + add hash
            navigate(`/#${id}`);
        } else {
            // Already on home → Smooth scroll to section
            const section = document.getElementById(id);
            section?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header>
            <nav className="navbar">
                <div className="logo">H<sub>2</sub>O The Men's Salon</div>

                <div className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>

                    {/* HOME */}
                    <li>
                        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                    </li>

                    {/* ABOUT */}
                    <li>
                        <a onClick={() => scrollToSection("about")} style={{ cursor: "pointer" }}>
                            About
                        </a>
                    </li>

                    {/* SERVICES */}
                    <li>
                        <a onClick={() => scrollToSection("services")} style={{ cursor: "pointer" }}>
                            Services
                        </a>
                    </li>

                    {/* LOCATION */}
                    <li>
                        <a onClick={() => scrollToSection("location")} style={{ cursor: "pointer" }}>
                            Location
                        </a>
                    </li>

                    {/* CONTACT */}
                    <li>
                        <a onClick={() => scrollToSection("footer")} style={{ cursor: "pointer" }}>
                            Contact
                        </a>
                    </li>

                    {/* BUTTON */}
                    <li>
                        <a className='nav-btn' onClick={() => scrollToSection("booking")} style={{ cursor: "pointer" }}>
                            Book Appointment
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
