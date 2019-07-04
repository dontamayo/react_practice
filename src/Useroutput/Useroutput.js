import React from 'react';
import './Useroutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName} {props.occupation} "I have decided to follow Jesus"</p>
            <p>"No turning back"</p>
        </div>
    )
}


export default userOutput;