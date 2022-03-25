import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../pages/people-page";
import {Provider} from "../swapi-context";

import './app.css';

const swapi = new SwapiService()

const App = () => {
  return (
    <div>
        <Provider value={swapi}>
          <Header />
          <RandomPlanet />
          <PeoplePage/>
      </Provider>
    </div>
  );
};

export default App;
