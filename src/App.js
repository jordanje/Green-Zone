import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import RoomList from './components/RoomList';
import PlantCards from './components/PlantCards';
import Search from './components/Search'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/plants">
          <PlantCards />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
