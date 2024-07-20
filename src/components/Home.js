import React from 'react'
import NavBar from "./NavBar";
import BannerBackground from "../Assets/home-banner-background.png"
import {FiArrowRight} from "react-icons/fi";
import BannerImage from "../Assets/home-banner-image.png"

const Home = () => {
    return (<div className='home-container'><NavBar/>
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="Home Banner"/>
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                    Your favorite food Delivered Hot & Fresh
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eum illum nobis voluptatem. Ea,
                    quaerat.
                </p>
                <button className='secondary-button'>
                    Order Now <FiArrowRight/>
                </button>
            </div>
            <div className="home-image-container">
                <img src={BannerImage} alt=""/>
            </div>
        </div>
    </div>)
}
export default Home
