import React from 'react'
import Zarefes from '../images/Zarefes.png'
import Stats from '../images/stats.png'

function Card() {
    return (
        <div className='card'>
            <img className='card-image' src={Zarefes} alt='Card' />
            <div className='card-stats'>
                <img className='card-star' src={Stats} alt='stats' />
                <span className='grey'>5.0</span>
                <span className='grey'>(6)</span>
                <span className='grey'>USA</span>
            </div>
            <p> Life Lessons with Kate Zeferes</p>
            <p> <span className='bold'>From $136</span> / person</p>

            
        </div>
    )
}

export default Card
