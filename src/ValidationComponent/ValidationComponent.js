import React from 'react'

export default function ValidationComponent({ text }) {

    let textLength = text ? text.length : null;

    let validationText;

    if (textLength && textLength >= 5) {
        validationText = (
            <p>
                Text long enough
            </p>
        )
    } else {
        validationText = (
            <p>
                Text too short
            </p>
        )
    }

    return (
        <div>
            {validationText}
        </div>
    )
}
