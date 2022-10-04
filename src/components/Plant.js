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
        <div>
            <h3>{name}</h3>
            <img src={image} />
            <p>Care Level: {care_level}</p>
            <p>Size: {size}</p>
            <button onClick={() => handleAddPlant(name)}>Add</button>
            
        </div>
    )
}