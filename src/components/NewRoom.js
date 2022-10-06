import { useState } from "react";
import "./NewRoom.css"

function NewRoom({ rooms, setRooms }) {
  const [addRoom, setAddRoom] = useState("");

  function handleAddRoom(e) {
    e.preventDefault();
    fetch("http://localhost:9292/rooms/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: addRoom,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newRooms = [...rooms, data];
        const roomsSorted = newRooms.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
        setRooms(roomsSorted);
        setAddRoom("");
      });
  }

  function newRoomInput(e) {
    setAddRoom(e.target.value);
  }

  return (
    <div className="new-room-form">
    <form onSubmit={handleAddRoom} className="form">
      <input
        className="new-room-input"
        type="text"
        value={addRoom}
        placeholder="New Room"
        onChange={newRoomInput}
      />
      <input type="submit" value="Create" className="btn" />
    </form>
    </div>
  );
}

export default NewRoom;
