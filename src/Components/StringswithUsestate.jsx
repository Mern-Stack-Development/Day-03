import React, { useState } from 'react';

export default function StringsWithUseState() {
    const [text, setText] = useState("Hello, World!");

    return (
        <div>
            <p>{text}</p>
            
            <button onClick={() => setText(text.toUpperCase())}>
                Uppercase
            </button>
            <button onClick={() => setText(text.toLowerCase())}>
                Lowercase
            </button>
            <button onClick={() => setText(text.split('').reverse().join(''))}>
                Reverse Text
            </button>
        </div>
    );
}
