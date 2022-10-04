import { useState } from "react";

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
        setRooms(newRooms);
        setAddRoom("");
      });
  }

  function newRoomInput(e) {
    setAddRoom(e.target.value);
  }

  return (
    <form onSubmit={handleAddRoom}>
      <input
        className="new-room"
        type="text"
        value={addRoom}
        placeholder="New Room"
        onChange={newRoomInput}
      />
      <input type="submit" value="Create" />
    </form>
  );
}

export default NewRoom;
