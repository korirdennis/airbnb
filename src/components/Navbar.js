import React from 'react'
import logo from '../images/Airbnb_Logo.png'

function Navbar() {
    return (
        <div>
            <nav>
                <img className='nav-logo' src={logo} alt='logo' />
            </nav>
        </div>
    )
}

export default Navbar
