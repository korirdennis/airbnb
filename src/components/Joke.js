import React from 'react';


function Joke(props) {
    
  return (
      <div className='joke'>
        {props.setup && <h3>Setup: {props.setup}</h3>}
        <p>Punchline: {props.punchline}</p>
        <hr/>
      </div>
      
  );
}

export default Joke;
