import React, { useState } from "react";
import "./NewBoxForm.css";

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

        if (Object.values(formData).every(input => input === "")) {
            console.log("formData", formData);
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