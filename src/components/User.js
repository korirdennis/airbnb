import React from 'react';

function User(props) {
  return (
    <div className="card">
        <h3><strong>Name: </strong>{props.name}</h3>
        <h3><strong>Username: </strong>{props.username}</h3>
        <p><strong>Email: </strong>{props.email}</p>
        <p><strong>Address: </strong>{props.address}</p>
        <p><strong>Phone: </strong>{props.phone}</p>
        <p><strong>Website: </strong>{props.website}</p>
        <p><strong>Company: </strong>{props.company}</p>
        <p><strong>CatchPhrase: </strong>{props.catchPhrase}</p>
        <hr />

    </div>
  )
}

export default User;
