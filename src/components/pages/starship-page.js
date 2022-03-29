import React, {useState} from "react" ;

import {StarshipsList, StarshipsDetails} from "../sw-components";
import Row from "../row";

const PlanetPage = () => {
    const [selectedItemId, setSelectedItemId] = useState(1)

    const leftElement =<StarshipsList setSelectedItemId={setSelectedItemId} />

    const rightElement =<StarshipsDetails selectedItemId={selectedItemId} />

    return  <Row left = {leftElement} right = {rightElement} />
}
export default PlanetPage;