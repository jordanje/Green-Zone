import { useEffect, useState } from "react"
import "./Room.css"

export default function Room({room}) {
    const [ addedPlants, setAddedPlants ] = useState([])
    const [ isOn, setIsOn ] = useState({id: ""})

    useEffect(() => {
        fetch(`http://localhost:9292/rooms/${room.id}/added_plants`)
        .then(data => data.json())
        .then(plants => setAddedPlants(plants))
    }, [])

    function handleWaterPlant(id) {
        // setIsOn(true)
        fetch(`http://localhost:9292/added_plants/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            }),
        })
        .then((r) => r.json())
        .then((data) => setIsOn({ id: id, isWatered: true}))
    }

    function deleteHandler(id) {
        fetch(`http://localhost:9292/addplants/${id}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then((deleting) => 
        {const deletePlant = addedPlants.filter(deletedPlant => deletedPlant.id !== id)
        setAddedPlants(deletePlant)}) 
    }

    return (
        <div id="room">
            <h2>{room.name}</h2>
            <div className="added-plants">
            {addedPlants.map((addedPlant) => (
            <div className="current-plants" key={addedPlant.id}>
                <p>{addedPlant.plant.name}</p>
                <div className={(isOn.id=== addedPlant.id) ? "water-droplet" : ""}></div>
                <img src={addedPlant.plant.image} />
                <button onClick={() => handleWaterPlant(addedPlant.id)}>Water</button>
                <button onClick={() => deleteHandler(addedPlant.id)} className="delete">Delete</button>
            </div>
            ))}
            </div>
        </div>
    )
}