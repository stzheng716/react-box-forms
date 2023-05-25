import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box"

function BoxList() {
    const [boxList, setBoxList] = useState([])

    function addNewBox(box) {
        const newBox = { ...box, id: uuid() };
        setBoxList(boxList => [...boxList, newBox])
    }

    function handleRemoveBox(id){
        evt.preventDefault();
        setBoxList(boxList.filter(box => box.id !== id))
    }

    return (
        <div>
            <NewBoxForm submit={addNewBox}/>
            {boxList.map(box => 
            <Box box={box} key={box.id} click={() => handleRemoveBox(box.id)} />)}
        </div>
    )
}

export default BoxList