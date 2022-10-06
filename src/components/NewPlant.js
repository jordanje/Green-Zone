import { useState } from "react"

import "./NewPlant.css"

export default function NewPlant ({plants, setPlants}) {
    const [ formData, setFormData ] = useState({name: "", image: "", care_level: "", size: ""})

    const handleFormChange = (event) => {
        const name = event.target.name
        let value = event.target.value

        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:9292/plants/new", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
             body: JSON.stringify(formData),
        })
      .then((res) => res.json())
      .then((data) => {
        const newPlants = [...plants, data];
        setPlants(newPlants);
        console.log(data)
      });
  }
    
   

    return  (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit} >
                <input  type="text" name="name" id="name" value={formData.name}  onChange={handleFormChange} placeholder="Name..."/>
                <select name="care_level" value={formData.care_level} onChange={handleFormChange}>
                    <option>Care Level</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <select name="size" value={formData.size} onChange={handleFormChange}>
                    <option>Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <input type="text" name="image" id="image" value={formData.image} onChange={handleFormChange} placeholder="Image..."/>
                <input type="submit" value="Create" id="create" />
            </form>
        </div>
    )
}