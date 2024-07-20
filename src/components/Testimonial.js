import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import {AiFillStar} from "react-icons/ai";

const Testimonial = () => {
    return (<div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">
                Testimonials
            </p>
            <h1 className="primary-heading">
                What Our Clients Say
            </h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium non, officia officiis suscipit
                tempore voluptate?
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt='profile pic'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolor fugit, neque quae ullam
                voluptatibus?</p>
            <div className="testimonials-stars-container">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>John Doe</h2>
        </div>
    </div>)
}
export default Testimonial

