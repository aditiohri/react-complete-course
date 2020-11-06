import React from 'react';
import './user.css'

export default function UserInput({ changeName, userName }) {
    return (
        <div>
            <p>What's your name?</p>
            <input className="inputStyle" type="text" onChange={changeName} value={userName}/>
        </div>
    )
}
