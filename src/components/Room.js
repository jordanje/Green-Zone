import { useEffect, useState } from "react";
import "./Room.css";

export default function Room({ room, setRooms, rooms }) {
  const [addedPlants, setAddedPlants] = useState([]);
  const [isOn, setIsOn] = useState({ id: "" });

  useEffect(() => {
    fetch(`http://localhost:9292/rooms/${room.id}/added_plants`)
      .then((data) => data.json())
      .then((plants) => setAddedPlants(plants));
  }, []);

  function handleWaterPlant(id) {
    fetch(`http://localhost:9292/added_plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((r) => r.json())
      .then((data) => {
        const updatedData = addedPlants.map((plant) => {
          if (plant.id === id) {
            plant.last_watered = data.last_watered;
            console.log("watered plant", plant);
            return plant;
          } else {
            console.log(plant);
            return plant;
          }
        });
        setAddedPlants(updatedData);
        setIsOn({ id: id, isWatered: true });
      });
  }

  function deleteHandler(id) {
    fetch(`http://localhost:9292/addplants/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deleting) => {
        const deletePlant = addedPlants.filter(
          (deletedPlant) => deletedPlant.id !== id
        );
        setAddedPlants(deletePlant);
      });
  }

  function deleteRoomHandler(id) {
    fetch(`http://localhost:9292/rooms/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deleting) => {
        const remainingRooms = rooms.filter(
          (deletedRoom) => deletedRoom.id !== id
        );
            // Reset the rooms state
            setRooms(remainingRooms)
      });
  }

  return (
    <div id="room">
      <div className="delete-btn-div">
        <button className="delete-room-btn" onClick={() => deleteRoomHandler(room.id)}>
           Delete 
        </button>
      </div>
      <h2>{room.name}</h2>
      <div className="added-plants">
        {addedPlants.map((addedPlant) => {
          const date = addedPlant.last_watered;
          const watered = String(date).slice(5, 10);
          return (
            <div className="current-plants" key={addedPlant.id}>
                <button onClick={() => deleteHandler(addedPlant.id)} className="delete-btn">X</button>
                <div className="plant-title"><h3>{addedPlant.plant.name}</h3></div>
                <div className={(isOn.id=== addedPlant.id) ? "water-droplet" : ""}></div>
                <img src={addedPlant.plant.image} />
                <div id="watered-div">
                     { addedPlant.last_watered != null ? <p>Last watered:  <span>{watered}</span></p> :<p>Water your plant!</p> } 
                    <button onClick={() => handleWaterPlant(addedPlant.id)} className="water-btn">water</button>
                </div>
            </div>
            )})}
            </div>
      </div>
  );
}
