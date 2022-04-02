import React, {useState} from "react" ;

import {PeopleList,PersonDetails,} from "../sw-components";
import Row from "../row";

const PeoplePage = ({selectedItemId, history}) => {
    const setSelectedItemId = (id) => {
    history.push(id);
  };

    const leftElement =<PeopleList setSelectedItemId={setSelectedItemId} />

    const rightElement =<PersonDetails selectedItemId={selectedItemId} />

    return  <Row left = {leftElement} right = {rightElement} />
}
export default PeoplePage;