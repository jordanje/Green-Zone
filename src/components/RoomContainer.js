import "./RoomContainter.css"
import Room from "./Room"

export default function RoomContainer({rooms, addedPlants}) {
    console.log(rooms)
    return (
        <div id="room-container">
            <style>{'body { background-color: rgb(231, 222, 210); }'}</style>
            <div className="rooms">
                 {rooms.map((room) => {
                    return (
                    <div className="room">
                        <Room room={room} addedPlants={addedPlants}/>
                    </div>
                    )
                 }
                )} 
            </div>
        </div>
    )
}