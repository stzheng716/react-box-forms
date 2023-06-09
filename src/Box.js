import React from "react";
import "./Box.css";

/** Component for Box
 *
 * Props:
 * - box inputs: { height, width, backgroundColor, click }
 *
 * Renders a box based on the props
 */

function Box({ height, width, backgroundColor, click }) {
    console.log('inputs: ', height, width, backgroundColor);
    const boxStyle = {
        height: `${height * 100}px`,
        width: `${width * 100}px`,
        backgroundColor,
    }
    console.log("boxStyle", boxStyle);
    return (
        <div className="box-container">
            <div className="box" style={boxStyle}>
            </div>
            <button onClick={click}>X</button>
        </div>
    )
}

export default Box