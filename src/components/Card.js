import React from 'react'
import Zarefes from '../images/Zarefes.png'
import Stats from '../images/stats.png'

function Card(props) {
    

    return (
        <div className='card'>
            <img className='card-image' src={props.img} alt='Card' />
            <div className='card-stats'>
                <img className='card-star' src={Stats} alt='stats' />
                <span className='grey'>{props.rating}</span>
                <span className='grey'>({props.reviewCount})</span>
                <span className='grey'>{props.country}</span>
            </div>
            <p> {props.title}</p>
            <p> <span className='bold'>From ${props.price}</span> / person</p>

            
        </div>
    )
}

export default Card
