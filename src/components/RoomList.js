import React, { useState } from "react";
import "./Home.css";

function RoomList ({search}) {
    const [currentRoom, setCurrentRoom] = useState("Kitchen")
    const [addRoom, setAddRoom] = useState("")
    const [rooms, setRooms] = useState(["Kitchen", "Dining Room", "Bathroom", "Living Room", "Hallway", "Bedroom 1", "Bedroom 2"])


    function handleRoomChange(e) {
        setCurrentRoom(e.target.value)
    }

    function handleAddRoom(e) {
        e.preventDefault()
        const newRooms = [...rooms, addRoom]
        setRooms(newRooms)
        setAddRoom("")
    }
    
    function newRoomInput(e) {
        setAddRoom(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleAddRoom}>
                <input className="new-room" type="text" value={addRoom} placeholder="New Room" onChange={newRoomInput}/>
                <input type="submit" value="Create"/>
            </form>

            <label> Search plants: 
                <input type="text" className="search-plants" value={search}/>
            </label>

            <label>Add plant to: 
                <select className="form-dropdown" name="room" value={currentRoom} onChange={handleRoomChange}>
                    {rooms.map((room) => {
                    return <option key={room} value={room}>{room}</option>
                    })}
                </select>
            </label>
        </div>
    )
}

export default RoomList