import React, {useState} from "react" ;

import {PlanetsList, PlanetsDetails} from "../sw-components";
import Row from "../row";

const PlanetPage = () => {
    const [selectedItemId, setSelectedItemId] = useState(1)

    const leftElement =<PlanetsList setSelectedItemId={setSelectedItemId} />

    const rightElement =<PlanetsDetails selectedItemId={selectedItemId} />

    return  <Row left = {leftElement} right = {rightElement} />
}
export default PlanetPage;