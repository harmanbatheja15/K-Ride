import React, { useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Logo from './logo.webp';

const Navbar = () => {

    useEffect(() => {
        const elment = document.querySelector(".hamburger");
        const elment1 = document.querySelector(".nav-list");
        elment.addEventListener("click", () => {
            elment.classList.toggle("active");
            elment1.classList.toggle("active");
        });
    });

    return (
        <>
            <header>
                <div className="nav-container">
                    <nav>
                        <NavLink to="/" className="navbar-brand">
                            <img src={Logo} alt="Kride Logo" title="K-Ride" />
                        </NavLink>

                        <ul className="nav-list nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" className="nav-link">
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Annual Reports
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Extract Of Annual Return
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/tenders" className="nav-link">
                                    Tenders
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Media
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    RTI
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Careers
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                        <div className="hamburger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;
