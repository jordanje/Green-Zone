import "./RoomContainter.css"
import Room from "./Room"
import NewRoom from "./NewRoom"
import NavBar from "./NavBar"
import WaterLog from "./WaterLog"

export default function RoomContainer({rooms, setRooms, addedPlants}) {

    return (
        <div id="room-container">
            <div className="new-room">
                <NewRoom rooms = {rooms} setRooms = {setRooms}/>
            </div>
            <style>{'body { background-color: rgb(231, 222, 210); }'}</style>
            <div className="rooms">
                 {rooms.map((room) => {
                    return (
                    <div className="room" >
                        <Room key={room.id} room={room} addedPlants={addedPlants}/>
                    </div>
                    )
                 }
                )} 
            </div>
        </div>

    )
}