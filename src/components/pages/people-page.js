import React, {useState} from "react" ;

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import {Consumer} from "../swapi-context";
import Row from "../row";

const PeoplePage = () => {
    const [selectedItemId, setSelectedItemId] = useState(1)
    const leftElement = (
        <Consumer>
            {(swapi) => {
                return <ItemList swapi={swapi} setSelectedItemId={setSelectedItemId}/>
            }}
        </Consumer>
        );

    const rightElement = (
        <Consumer>
            {(swapi) => {
                return <PersonDetails swapi={swapi} selectedItemId={selectedItemId}/>
            }}
        </Consumer>
        );

    return ( <Row left = {leftElement} right = {rightElement} />
    )
}

export default PeoplePage;