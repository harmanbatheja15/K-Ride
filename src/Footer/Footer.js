import React from 'react';
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import './Footer.css';
import Logo from "./logo.webp";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section footer-image">
                    <h2>
                        RAIL INFRASTRUCTURE DEVELOPMENT COMPANY (KARNATAKA)
                        LIMITED
                    </h2>
                    <br />
                    <h3>
                        A Joint Venture of Government of Karnataka & Ministry of
                        Railways
                    </h3>
                    <br />
                    <img src={Logo} alt="Kride Logo" title="K-Ride" />
                    <p>
                        <a href="">
                            <FacebookIcon className="social-media-icons" />
                        </a>
                        <a href="">
                            <TwitterIcon className="social-media-icons" />
                        </a>
                        <a href="">
                            <LinkedInIcon className="social-media-icons" />
                        </a>
                    </p>
                </div>

                <div className="footer-section footer-links">
                    <h4>
                        Rail Infrastructure Development Company(Karnataka)
                        Limited – “KRIDE” is a Joint Venture Company established
                        in year 2000 by Government of Karnataka (GOK) & Ministry
                        of Railways (MOR).
                    </h4>
                    <br />
                    <h3>Quick Links</h3>
                    <br />
                    <ul>
                        <li>
                            <NavLink to="/">Sitemap</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Disclaimer</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Hyperlinking Policy</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Privacy Policy</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Terms & Conditions</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="footer-section footer-contact" style={{ border: "none" }}>
                    <h2>Contact Us</h2>
                    <br />
                    <p>MSIL House, 7th Floor</p>
                    <p>#36, Cunningham Road</p>
                    <p>Bangalore – 560052</p>
                    <br />
                    <p>Ph. No: 080 – 22370581</p>
                    <p>Fax No: 080 – 22370582</p>
                    <p>Email: mdkride@gmail.com</p>
                    <br />
                    <button>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </button>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; Copyright 2020. All rights reserved | Website Designed by
                Harman Batheja
            </div>
        </div>
    );
}

export default Footer;
