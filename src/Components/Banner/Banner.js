import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>Crack the eggs into a bowl and beat them with a fork. Season with salt and pepper.
                    Heat a non-stick frying pan over medium heat. Add the butter or oil and let it melt.</h1>
            </div>
            <div className='fade_bottom'>
        
            </div>
        </div>
    )
}

export default Banner