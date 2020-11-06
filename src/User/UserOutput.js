import React from 'react';
import './user.css';

export default function UserOutput({ userName }) {
    return (
      <div>
        <p>
          you better work, <span className="userName">{userName}</span>!
        </p>
      </div>
    );
}
