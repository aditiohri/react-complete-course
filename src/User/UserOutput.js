import React from 'react';
import './user.css';

export default function UserOutput({ userName }) {
    return (
      <div>
        <p>
          be the strange you wish to see in the world, <span className="userName">{userName}</span>!
        </p>
        <p>you better work</p>
      </div>
    );
}
