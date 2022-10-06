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
  const [ careLevel, setCareLevel ] = useState("")


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
    if(careLevel === "EASY"){
      return plant.care_level === "easy" && plantName.includes(search)
    }
    if(careLevel === "MEDIUM"){
      return plant.care_level === "medium" && plantName.includes(search)
    }
    if(careLevel === "HARD"){
      return plant.care_level === "hard" && plantName.includes(search)
    }
      return plantName.includes(search)
  })
 

  // roomlist dropdown
  function handleRoomChange(event) {
    setCurrentRoom(event.target.value)
    // setCurrentRoomId(event.target.value)
  }

  function handleCareLevel(event) {
    setCareLevel(event.target.value)
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms">
          <RoomContainer rooms={rooms} setRooms={setRooms} addedPlants={addedPlants}/>
        </Route>
        <Route exact path="/plants">
          <PlantCards 
          searchedPlants={searchedPlants} 
          plants={plants}
          setPlants={setPlants}
          handleSearchChange={handleSearchChange} 
          searchValue={searchValue} 
          rooms={rooms} 
          currentRoom={currentRoom}
          handleRoomChange={handleRoomChange}
          careLevel = {careLevel}
          handleCareLevel={handleCareLevel}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
