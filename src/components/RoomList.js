import React, { useState } from "react";
import "./Home.css";

function RoomList ({search, rooms, handleRoomChange, currentRoom}) {

    return (
        <div>
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