import React, { useState } from "react";

function NewBoxForm({submit}){
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    })

    function handleChange(evt){
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value,
        }));

    }

    return (
    <form>
        <label htmlFor="height">height: </label>
        <input
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
        />
        <label htmlFor="width">width: </label>
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
    </form>)
}