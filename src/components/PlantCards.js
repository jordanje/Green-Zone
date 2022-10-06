import RoomList from "./RoomList";
import "./PlantCards.css";
import Plant from "./Plant";
import Search from "./Search";
import NewPlant from "./NewPlant";
import FilterPlant from "./FilterPlant";

export default function PlantCards({searchedPlants, plants, setPlants, handleSearchChange, searchValue, rooms, currentRoom, handleRoomChange, careLevel, handleCareLevel}) {
    return (
        <div className="plant-page">
             
            <div className="plant-fx">
                <div className="plant-fx-left">
                    <Search handleSearchChange={handleSearchChange} searchValue={searchValue}/>
                    
                </div>
                <div className="plant-fx-right">
                    <FilterPlant careLevel={careLevel} handleCareLevel={handleCareLevel}/>
                    <RoomList rooms={rooms} currentRoom={currentRoom} handleRoomChange={handleRoomChange}/>
                </div>
                
            </div>
            <div className="plant-list">
                {searchedPlants.map((plant) => <Plant key={plant.id} plant={plant} currentRoom={currentRoom}/>)}
            </div>
            <div className="form-container">
                <NewPlant plants={plants} setPlants={setPlants}/>
            </div>
           
        </div>
    )
}