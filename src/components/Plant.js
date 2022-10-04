import "./Plant.css"

export default function Plant({plant, currentRoom}) {
    const { name, image, care_level, size, id } = plant
    console.log(currentRoom)

    function handleAddPlant() {
        fetch("http://localhost:9292/added_plants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                plant_id: id,
                room_id: currentRoom
            }),
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
    }



    return (
        <div className="plant-card">
            <h3>{name}</h3>
            <img src={image} />
           
            <div className="plant-flex">
            <p>Size: <span>{size}</span></p>
            <p>Care Level: <span>{care_level}</span> </p>
            <button className="button-6" onClick={() => handleAddPlant(name)}>+</button>
            </div>
        </div>
    )
}