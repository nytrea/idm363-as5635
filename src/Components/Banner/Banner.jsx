import React from 'react';
import './Banner.css'
import background from './homepage-banner.jpg';


const Banner = () => (
    <div className='banner-container'>
        <img src={background} alt="Logo" class="banner-image"/>
        {/* create parallax scrolling background */}
        {/* <h1>For Simple and Affordable Living</h1> */}
    </div>

);

export default(Banner)