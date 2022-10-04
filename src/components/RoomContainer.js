import "./RoomContainter.css"
import Room from "./Room"
import NewRoom from "./NewRoom"

export default function RoomContainer({rooms, setRooms, addedPlants}) {

    return (
        <div id="room-container">
            <NewRoom rooms = {rooms} setRooms = {setRooms}/>
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