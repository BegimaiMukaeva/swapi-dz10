import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page";
import {Provider} from "../swapi-context";

import './app.css';
import StarshipList from "../starship-list";

const swapi = new SwapiService()

const App = () => {
  return (
    <div>
        <Provider value={swapi}>
          <Header />
          <RandomPlanet />
          <PeoplePage/>
          <PlanetPage />
          <StarshipPage />
      </Provider>
    </div>
  );
};

export default App;
