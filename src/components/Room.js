import { useEffect, useState } from "react"
import "./Room.css"

export default function Room({room}) {
    const [ addedPlants, setAddedPlants ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/rooms/${room.id}/added_plants`)
        .then(data => data.json())
        .then(plants => setAddedPlants(plants))
    }, [])


    function handleWaterPlant(id) {
        fetch(`http://localhost:9292/added_plants/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            }),
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
        
    }


    return (
        <div id="room">
            <h2>{room.name}</h2>
            <div className="added-plants">
            {addedPlants.map((addedPlant) => (
            <div key={addedPlant.id}>
                <p>{addedPlant.plant.name}</p>
                <img src={addedPlant.plant.image} />
                <button onClick={() => handleWaterPlant(addedPlant.id)}>Water</button>
            </div>
            ))}
            </div>
        </div>
    )
}