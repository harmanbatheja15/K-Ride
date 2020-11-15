import React from 'react';
import './Contact.css';
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <>
            <section className="contact-section" id="contact">
                <div className="contact-container">
                    <div className="row">
                        <div className="section-title">
                            <h2 data-heading="contact">Get In Touch</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="contact-item">
                            <div className="contact-item-inner outer-shadow">
                                <PhoneIcon className="contact-icons" />
                                <span>Phone</span>
                                <p>+91 12345 67890</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-inner outer-shadow">
                                <EmailIcon className="contact-icons" />
                                <span>Email</span>
                                <p>mdkride@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-inner outer-shadow">
                                <LocationOnIcon className="contact-icons" />
                                <span>Address</span>
                                <p>
                                    Rail Infrastructure Development Company (Karnataka) Limited MSIL House, 7th Floor #36, Cunningham Road Bangalore – 560052
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="contact-form">
                            <form>
                                <div className="row">
                                    <div className="w-50">
                                        <div className="input-group outer-shadow hover-in-shadow">
                                            <input type="text" placeholder="Name" className="input-control" name="name" />
                                        </div>
                                        <div className="input-group outer-shadow hover-in-shadow">
                                            <input type="email" placeholder="Email" className="input-control" name="email" />
                                        </div>
                                        <div className="input-group outer-shadow hover-in-shadow">
                                            <input type="number" placeholder="Mobile Number" className="input-control" name="mobile" />
                                        </div>
                                    </div>
                                    <div className="w-50">
                                        <div className="input-group outer-shadow hover-in-shadow">
                                            <textarea className="input-control" placeholder="Message" name="message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="submit-btn">
                                        <button type="submit" className="btn-1 outer-shadow hover-in-shadow">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7557112851487!2d77.59208091526995!3d12.987470518042747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17eb8ff97c4f%3A0xa9ba9b9a7d06d5a7!2sKRIDE!5e0!3m2!1sen!2sin!4v1605236764594!5m2!1sen!2sin" width="1000" height="450" frameBorder="0" style={{ border: "none" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>

            <Footer />

        </>
    );
}

export default Contact;
