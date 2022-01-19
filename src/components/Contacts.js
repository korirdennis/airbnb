import React from 'react';

function Contacts(props) {
  return (
    <div className="contacts">
        <h1>Name: {props.name}</h1>
        <h2>age{props.age}</h2>
        <h3>city{props.city}</h3>
        <h4>Country{props.Country}</h4>
    </div>
  );
}


export default Contacts;
