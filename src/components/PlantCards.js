import RoomList from "./RoomList";
import "./PlantCard.css";
import Plant from "./Plant";
import Search from "./Search";

export default function PlantCards({plants}) {
    return (
        <div>
            <div>
                <Search />
            </div>
            <div className="plant-list">
                {plants.map((plant) => <Plant plant={plant}/>)}
            </div>
        </div>
    )
}