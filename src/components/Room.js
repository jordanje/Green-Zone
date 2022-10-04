import { useEffect, useState } from "react"
import "./Room.css"

export default function Room({room, addedPlants}) {
    const [ plants, setPlants ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/rooms/${room.id}/added_plants`)
        .then(data => data.json())
        .then(plants => setPlants(plants))
    })

    return (
        <div id="room">
            <h2>{room.name}</h2>
            <div className="added-plants">
            {plants.map((plant) => (
            <div>
                <p>{plant.name}</p>
                <img src={plant.image} />
            </div>
            ))}
            </div>
        </div>
    )
}