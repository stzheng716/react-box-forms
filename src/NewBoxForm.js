import React, { useState } from "react";
import "./NewBoxForm.css";

/** Form for a NewBoxForm.
 *
 * Props:
 * - submit: callback to add new box
 *
 * State:
 * - form data: {height:"", width:"", backgroundColor:""}
 *
 * Take in data submitted for a box to be rendered 
 * 
 */

function NewBoxForm({submit}){
    const initialForm = {height:"", width:"", backgroundColor:""};
    const [formData, setFormData] = useState(initialForm);

    function handleChange(evt){
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value,
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        if (Object.values(formData).some(input => input === "")) {
            alert("Need inputs!");
        } else {
            submit(formData);
            setFormData(initialForm);
        }
    }

    return (
    <form>
        <label htmlFor="height">Height: </label>
        <input
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
        />
        <label htmlFor="width">Width: </label>
        <input
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
        />
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
            id="backgroundColor"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
        />
        <button onClick={handleSubmit}>Create Block</button>
    </form>)
}

export default NewBoxForm;