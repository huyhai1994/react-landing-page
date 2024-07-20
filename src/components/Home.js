import React from 'react'
import NavBar from "./NavBar";
import BannerBackground from "../Assets/home-banner-background.png"

const Home = () => {
    return (<div className='home-container'><NavBar/>
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="Home Banner"/>
            </div>
        </div>
    </div>)
}
export default Home
