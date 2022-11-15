import React from 'react';
import './Categories.css'
import aromatherapy from './category-aroma-thumbnail.jpg'
import stationery from './category-stationery-thumbnail.jpg'
import kitchenware from './category-kitchen-thumbnail.jpg'


const Categories = () => (
    <div className='categories-container'>
        <h1 className='categories-title'>What Are You Shopping For?</h1>
        <div className='categories-links-container'>
            <div className='category-button'>
                <img src={aromatherapy} alt="category-btn" class="category-image"/>
                <h1 className='btn-name'>Aromatherapy</h1>

            </div>

            <div className='category-button'>
                <img src={stationery} alt="category-btn" class="category-image"/>
                <h1 className='btn-name'> Stationery</h1>

            </div>

            <div className='category-button'>
                <img src={kitchenware} alt="category-btn" class="category-image"/>
                <h1 className='btn-name'> Kitchenware</h1>

            </div>
        </div>

    </div>

);

export default(Categories)