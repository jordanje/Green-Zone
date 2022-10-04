import React, { useState } from "react";
import "./Home.css";

function RoomList ({search, rooms, handleRoomChange, currentRoom}) {
    const [addRoom, setAddRoom] = useState("")
  

  

    function handleAddRoom(e) {
        e.preventDefault()
        // const newRooms = [...rooms, addRoom]
        // setRooms(newRooms)
        // setAddRoom("")
    }
    
    function newRoomInput(e) {
        // setAddRoom(e.target.value)
    }

    return (
        <div>
         {/* <form onSubmit={handleAddRoom}>
                <input className="new-room" type="text" value={addRoom} placeholder="New Room" onChange={newRoomInput}/>
                <input type="submit" value="Create"/>
            </form> */}


            <label>Add plant to: 
                <select className="form-dropdown" name="room" value={currentRoom} onChange={handleRoomChange}>
                    <option>Select Room</option>
                   
                    {rooms.map((room) => {
                    return <option key={room.id} value={room.id} name={room.name}>{room.name}</option>
                    })} 
                </select>
            </label> 
        </div>
    )
}

export default RoomList