import React, {useState} from "react" ;

import {StarshipsList, StarshipsDetails} from "../sw-components";
import Row from "../row";

const PlanetPage = ({selectedItemId, history}) => {
    const setSelectedItemId = (id) => {
    history.push(id);
  };

    const leftElement =<StarshipsList setSelectedItemId={setSelectedItemId} />

    const rightElement =<StarshipsDetails selectedItemId={selectedItemId} />

    return  <Row left = {leftElement} right = {rightElement} />
}
export default PlanetPage;