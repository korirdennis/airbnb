import React from 'react'
import HeroImage from '../images/photo-grid.png'

function Hero() {
    return (
        <section className='hero'>
            <img className='hero-image' src={HeroImage} alt='hero' />
            <h1 className='hero-header'> Online experinces</h1>
            <p className='hero-text'> Join unique ineractive activities led by one of a kind hosts all without leaving home</p>
        </section>
    )
}

export default Hero
