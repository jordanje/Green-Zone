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
  const [currentRoom, setCurrentRoom] = useState()
  const [rooms, setRooms] = useState([])
  const [ plants, setPlants ] = useState([])
  const [ addedPlants, setAddedPlants ] = useState([])
  const [ searchValue, setSearchValue ] = useState("")//updates on search change


  useEffect(() => {
    fetch("http://localhost:9292/rooms")
    .then(data => data.json())
    .then(rooms => {
      setRooms(rooms)
      // setCurrentRoom({...rooms[0]})
    })

    fetch("http://localhost:9292/plants")
    .then(data => data.json())
    .then(plants => setPlants(plants))

    fetch("http://localhost:9292/added_plants")
    .then(data => data.json())
    .then(plants => setAddedPlants(plants))
  }, [])


  // search plants
  function handleSearchChange(event) {
    setSearchValue(event.target.value)
   

  }

  const searchedPlants = plants.filter((plant) => {
    const plantName = plant.name.toLowerCase()
    const search = searchValue.toLowerCase()
    return plantName.includes(search)
  })

  // roomlist dropdown
  function handleRoomChange(event) {
    setCurrentRoom(event.target.value)
    // setCurrentRoomId(event.target.value)
  }

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
          <PlantCards 
          plants={searchedPlants} 
          handleSearchChange={handleSearchChange} 
          searchValue={searchValue} 
          rooms={rooms} 
          currentRoom={currentRoom}
          handleRoomChange={handleRoomChange}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
