import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PlantCards from './components/PlantCards';

function App() {
  return (
    <div className="App">
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
