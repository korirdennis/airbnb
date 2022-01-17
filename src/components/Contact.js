import React from 'react'

function Contact(props) {
    return (
        <div className='contact-card'>
            <img src={props.imgUrl} alt="Avatar" style={{width: '300px'}}/>   
            <h3>{props.name}</h3>
            <div className='info-group'>
                <img src="https://img.icons8.com/color/48/000000/phone.png" alt="phone" />  
                <p>{props.phone}</p>
            </div>
            <div className='info-group'>
                <img src="https://img.icons8.com/color/48/000000/email.png" alt="phone" />  
                <p>{props.email}</p>
            </div>
            
        </div>
    )
}

export default Contact
