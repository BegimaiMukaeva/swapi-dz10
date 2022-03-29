import React from "react";
import ItemList from "../item-list";
import PlanetList from "../planet-list";
import StarshipList from "../starship-list";
import {withSwapi} from "../hoc";

const PeopleList = withSwapi(
    (props) => <ItemList {...props} />,
    (swapi) => ({getData: swapi.getAllPeople}),
    )
const PlanetsList = withSwapi(
    (props) => <PlanetList {...props} />,
    (swapi) => ({getData: swapi.getAllPlanets}),
    )
const StarshipsList = withSwapi(
    (props) => <StarshipList {...props} />,
    (swapi) => ({getData: swapi.getAllStarships}),
    )


export {PeopleList, PlanetsList, StarshipsList};