import React from 'react'

function Test() {

const firstName = 'Dennis';
const lastName = 'Korir';
const date = new Date();
const hours = date.getHours();

let timeOfDay;
if (hours < 12) {
  timeOfDay = "morning";
} else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
} else  if(hours >= 17 && hours < 20) {
    timeOfDay = "evening";
} else {
    timeOfDay = "night";
}


    return (
        <div>
            <h1> Good {timeOfDay} {firstName} {lastName}</h1>
        </div>
    )
}

export default Test
