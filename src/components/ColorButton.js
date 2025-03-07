import React, { useState } from 'react'

export default function ColorButton() {
    const colors = ["red", "green", "white", "black", "purple", "yellow", "violet", "orange", "blue", "pink"];
    const [styleButton, setStyleButton] = useState({height: 50, width: 130});
    const changeColor = () => {
        setStyleButton({
            height: 50,
            width: 130,
            color: colors[Math.floor(Math.random() * colors.length)], 
            backgroundColor: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    return (
        <>
            <button style={styleButton} onClick={changeColor}>click me</button>
        </>
    )
}
