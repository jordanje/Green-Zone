import RoomList from "./RoomList";
import "./PlantCard.css";
import Plant from "./Plant";
import Search from "./Search";

export default function PlantCards({plants, handleSearchChange, searchValue, rooms, currentRoom, handleRoomChange}) {
    return (
        <div className="plant-page">
            <div className="plant-fx">
                <Search handleSearchChange={handleSearchChange} searchValue={searchValue}/>
                <RoomList rooms={rooms} currentRoom={currentRoom} handleRoomChange={handleRoomChange}/>
            </div>
            <div className="plant-list">
                {plants.map((plant) => <Plant key={plant.id} plant={plant} currentRoom={currentRoom}/>)}
            </div>
        </div>
    )
}