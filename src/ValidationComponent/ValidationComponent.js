import React from 'react'

export default function ValidationComponent({ text }) {
    return (
        <div>
            <p>
                {text ? (text.length) : null}
                
                </p>
        </div>
    )
}
