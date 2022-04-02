import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page";
import {Provider} from "../swapi-context";

import './app.css';

const swapi = new SwapiService()

const App = () => {
    return (
        <div>
            <Provider value={swapi}>
                <Router>
                    <Header/>
                    <RandomPlanet/>
                    <Route
                        path='/'
                        exact={true}
                        render={() => <h1>Hello Star Wars!!!</h1>}
                    >
                    </Route>
                    <Route
                        path="/people/:id?/"
                        render={({match}) => {
                            let selectedItemId = match.params.id;
                            if (selectedItemId === undefined) {
                                selectedItemId = "1";
                            }
                            return (
                                <div>
                                    {" "}
                                    <PeoplePage selectedItemId={selectedItemId}/>
                                </div>
                            );
                        }}
                    />
                    <Route
                        path="/planets/:id?/"
                        render={({match}) => {
                            let selectedItemId = match.params.id;
                            if (selectedItemId === undefined) {
                                selectedItemId = "1";
                            }
                            return (
                                <div>
                                    {" "}
                                    <PlanetPage selectedItemId={selectedItemId}/>
                                </div>
                            );
                        }}
                    />
                    <Route
                        path="/starships/:id?"
                        render={({match}) => {
                            let selectedItemId = match.params.id;
                            if (selectedItemId === undefined) {
                                selectedItemId = "1";
                            }
                            return (
                                <div>
                                    {" "}
                                    <StarshipPage selectedItemId={selectedItemId}/>
                                </div>
                            );
                        }}
                    />
                </Router>
            </Provider>
        </div>
    );
};

export default App;
