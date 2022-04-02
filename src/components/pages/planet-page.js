import React, {useState} from "react" ;

import {PlanetsList, PlanetsDetails} from "../sw-components";
import Row from "../row";

const PlanetPage = ({selectedItemId, history}) => {
    const setSelectedItemId = (id) => {
    history.push(id);
  };

    const leftElement =<PlanetsList setSelectedItemId={setSelectedItemId} />

    const rightElement =<PlanetsDetails selectedItemId={selectedItemId} />

    return  <Row left = {leftElement} right = {rightElement} />
}
export default PlanetPage;