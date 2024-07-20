import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import {BsFillPlayCircleFill} from "react-icons/bs";

const About = () => {
    return (<div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="About Background"/>
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="About Section"/>
            </div>
            <div className="about-section-image-container">
                <p className="primary-heading">About</p>
                <h1 className="primary-subheading">
                    Food is an Important part of a balanced diet
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque modi perferendis qui, quibusdam
                    veniam.
                </p>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque modi perferendis qui, quibusdam
                    veniam.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button"><BsFillPlayCircleFill/>Watch video</button>
                </div>

            </div>
        </div>

    )
}
export default About
