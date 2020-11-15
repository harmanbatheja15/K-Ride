import React, { useEffect } from "react";
import banner1 from './banner1.webp';
import banner2 from './banner2.webp';
import banner3 from "./banner3.webp";
import map1 from './map1.webp';
import map2 from './map2.webp';
import trainVideo1 from './trainVideo1.gif';
import trainVideo2 from "./trainVideo2.gif";
import client1 from './client1.webp';
import client2 from './client2.webp';
import client3 from './client3.webp';
import client4 from './client4.webp';
import client5 from './client5.webp';
import client6 from './client6.webp';
import Footer from '../Footer/Footer';
import './Home.css';
import Logo from "./logo.webp";
import { NavLink } from 'react-router-dom';

const Home = () => {

    useEffect(() => {
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" activeImage", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " activeImage";
            setTimeout(showSlides, 2000);
        }

    })
        
    return (
        <>
            {/* <div id="slider">
                <figure>
                    <img src={banner1} alt="Image1" />
                    <img src={banner2} alt="Image2" />
                    <img src={banner3} alt="Image3" />
                </figure>
            </div> */}

            {/* ----------------- */}

            <div className="slideshow-container">
                <div className="mySlides fadeImage">
                    <div className="numbertext">1 / 3</div>
                    <img src={banner1} />
                </div>

                <div className="mySlides fadeImage">
                    <div className="numbertext">2 / 3</div>
                    <img src={banner2} />
                </div>

                <div className="mySlides fadeImage">
                    <div className="numbertext">3 / 3</div>
                    <img src={banner3} />
                </div>

            </div>
            <br />
            <div style={{ textAlign: "center" }}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            {/* ----------------- */}

            <div className="header-text">
                <div>
                    <img src={Logo} alt="Kride Logo" title="K-Ride" />
                    <h1>
                        RAIL INFRASTRUCTURE DEVELOPMENT COMPANY (KARNATAKA) LIMITED
                        <br />
                        <span>
                            A Joint Venture of Government of Karnataka & Ministry of Railways
                        </span>
                    </h1>
                </div>
            </div>

            <div className="cards">
                <div className="card">
                    <img src={trainVideo1} alt="" />
                </div>
                <div className="card">
                    <img src={map1} alt="" />
                </div>
                <div className="card">
                    <h3>About</h3>
                    <p>
                        Rail Infrastructure Development Company(Karnataka)
                        Limited – “KRIDE” is a Joint Venture Company established
                        in year 2000 by Government of Karnataka (GOK) & Ministry
                        of Railways (MOR).
                    </p>
                    <NavLink to="/">Read More...</NavLink>
                </div>
                <div className="card">
                    <img src={map2} alt="" />
                </div>
                <div className="card">
                    <h3>Projects</h3>
                    <p>
                        KRIDE has been taking a lead role in implementing the
                        projects in Karnatakaa. GoK & MoR already decided to
                        take up the first phase of Project.
                    </p>
                    <NavLink to="/">Read More...</NavLink>
                </div>
                <div className="card">
                    <img src={trainVideo2} alt="" />
                </div>
            </div>

                <div className="gov-images">
                    {/* <marquee id="marquee" direction="" scrollamount="15" onMouseOver={()=> document.getElementById('marquee').stop()} onMouseOut={()=> document.getElementById('marquee').start()}> */}
                        <img src={client1} alt="" />
                        <img src={client2} alt="" />
                        <img src={client3} alt="" />
                        <img src={client4} alt="" />
                        <img src={client5} alt="" />
                        <img src={client6} alt="" />
                    {/* </marquee> */}
                </div>

            <Footer />
        </>
    );
}

export default Home;
