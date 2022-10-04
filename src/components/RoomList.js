import React, { useState } from "react";
import "./RoomList.css";
import "./Home.css";

function RoomList ({search, rooms, handleRoomChange, currentRoom}) {

    return (
        <div>
                <select className="room-select" name="room" value={currentRoom} onChange={handleRoomChange}>
                    <option>Select room to add to</option>
                
                    {rooms.map((room) => {
                    return <option key={room.id} value={room.id} name={room.name} className="rooms">{room.name}</option>
                    })} 
                </select>
        </div>
    )
}

export default RoomList