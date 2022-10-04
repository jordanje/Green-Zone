import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Home from './components/Home';
import RoomList from './components/RoomList';
import PlantCards from './components/PlantCards';
import Search from './components/Search'
import NavBar from './components/NavBar'
import RoomContainer from './components/RoomContainer';


function App() {
  const [currentRoom, setCurrentRoom] = useState("Kitchen")
  const [rooms, setRooms] = useState([])
  const [ plants, setPlants ] = useState([])
  const [ addedPlants, setAddedPlants ] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/rooms")
    .then(data => data.json())
    .then(rooms => setRooms(rooms))

    fetch("http://localhost:9292/plants")
    .then(data => data.json())
    .then(plants => setPlants(plants))

    fetch("http://localhost:9292/added_plants")
    .then(data => data.json())
    .then(plants => setAddedPlants(plants))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms">
          <RoomContainer rooms={rooms} addedPlants={addedPlants}/>
        </Route>
        <Route exact path="/plants">
          <PlantCards plants={plants}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
