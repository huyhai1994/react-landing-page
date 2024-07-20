import React from 'react'
import Logo from '../Assets/Logo.svg'
import {BsTwitter, BsYoutube} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";
import {FaFacebookF} from "react-icons/fa";

const Footer = () => {
    return (<div className='footer-wrapper'>
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="footer-icons">
                <BsTwitter/>
                <SiLinkedin/>
                <BsYoutube/>
                <FaFacebookF/>
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Hello</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>03-9226-0046</span>
                <span>nguyenhuyhai926@gmail.com</span>
                <span>foodie@92.com.vn</span>
                <span>Terms</span>
                <span>contact@food.vn</span>
                <span>Press</span>
            </div>
        </div>
    </div>)
}
export default Footer
