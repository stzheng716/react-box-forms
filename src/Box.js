import React from "react";

function Box({ height, width, backgroundColor, click }) {
    const boxStyle = {
        height,
        width,
        backgroundColor,
    }
    return (
        <div>
            <div style={boxStyle}>
            </div>
            <button onClick={click}>X</button>
        </div>
    )
}

export default Box