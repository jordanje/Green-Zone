import RoomList from "./RoomList";
import "./PlantCard.css";

export default function PlantCards() {
    return (
        <div>
            <div>
                <RoomList />
            </div>
            <div className="plant-list">
                <div className="plant-1">
                    <h3>Aloe Vera</h3>
                    <img src="https://media2.giphy.com/media/fT1eqEVkKC9b8anBCq/giphy.gif?cid=ecf05e47ex0aa7qoviydramdkr7f57veaqzrd9m7xgdhsakf&rid=giphy.gif&ct=s" alt="plant"/>
                    <p>care level: easy</p>
                    <button>Add</button>
                </div>
                <div className="plant-1">
                    <h3>Snake Plant</h3>
                    <img src="https://media1.giphy.com/media/PjaY1q86PZF1Mu03dO/giphy.gif?cid=ecf05e47ezc53eac1l6c3pb0lwrb9gk4wijuy6bodk3xp53p&rid=giphy.gif&ct=s" alt="plant"/>
                    <button>Add</button>
                </div>
                <div className="plant-1">
                    <h3>Cactus</h3>
                    <img src="https://media4.giphy.com/media/ZatyprIgdCb1CYifqL/200w.webp?cid=ecf05e471ib5pjrb460eghpuodmo0c6akfstwl8iqae01nqv&rid=200w.webp&ct=s" alt="plant"/>
            
                    <button>Add</button>
                </div>
                <div className="plant-1">
                    <h3>Fern</h3>
                    <img src="https://media4.giphy.com/media/QAPZUS7f5OAfhXjFG4/giphy.gif?cid=ecf05e47wfsnls6q95m5nhv0lyk5vna0hztfnv9c2os5y4rt&rid=giphy.gif&ct=s" alt="plant"/>
                    <button>Add</button>
                </div>
                <div className="plant-1">
                    <h3>Monstera</h3>
                    <img src="https://media3.giphy.com/media/Sxn8JuEtlVN3JrTMY4/giphy.gif?cid=ecf05e47n45576go4ygayi90r8xq0tnxwihflk93owvnfcb1&rid=giphy.gif&ct=s" alt="plant"/>
                    
                    <button>Add</button>
                </div>
                <div className="plant-1">
                    <h3>Prayer</h3>
                    <img src="https://media1.giphy.com/media/XfhFpIuKochh0aBV7g/200w.webp?cid=ecf05e471nykye0dls5z2sv31oj08tajdqrswwwg2flawavs&rid=200w.webp&ct=s" alt="plant"/>
                    
                    <button>Add</button>
                </div>
                <div className="plant-1">
                    <h3>Pothos</h3>
                    <img src="https://media0.giphy.com/media/4523ehr0vrq567DwrT/giphy.webp?cid=ecf05e47tjee77m05qd7wj26e0s9540dz2nel6a1jfvw6m8u&rid=giphy.webp&ct=s" alt="plant"/>
                    
                    <button>Add</button>
                </div>
                <div className="plant-1">
                    <h3>Fiddle Leaf</h3>
                    <img src="https://media0.giphy.com/media/dAREZ1liNFVMX7YYxL/200w.webp?cid=ecf05e476x2mdr4iwsnj53ozdtz2274wkqwprsux7pibxbhj&rid=200w.webp&ct=s" alt="plant"/>
                  
                    <button>Add</button>
                </div>
                <div className="plant-1">
                    <h3>Chinese Money</h3>
                    <img src="https://media2.giphy.com/media/MsKiBZT2JTlqj9oeUa/200w.webp?cid=ecf05e472nwz6m9f8qc1qpzszts0asbro98t3m7na9eo0pl4&rid=200w.webp&ct=s" alt="plant"/>
                  
                    <button>Add</button>
                </div>

            </div>
        </div>
    )
}