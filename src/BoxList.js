import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";

/** Component for BoxList
 *
 * State:
 * - boxList: array of boxes
 *
 * BoxList handles rendering newBoxForm and Boxes
 *
 * App => BoxList => NewBoxForm, Box
 */


function BoxList() {
    const [boxList, setBoxList] = useState([])

    function addNewBox(box) {
        const newBox = { ...box, id: uuid() };
        setBoxList(boxList => [...boxList, newBox])
    }

    function handleRemoveBox(id){
        setBoxList(boxList.filter(box => box.id !== id))
    }

    return (
        <div>
            <NewBoxForm submit={addNewBox}/>
            {boxList.map(box =>
            <Box 
            height={box.height} 
            width={box.width} 
            backgroundColor={box.backgroundColor} 
            key={box.id} click={() => handleRemoveBox(box.id)} />)}
        </div>
    )
}

export default BoxList