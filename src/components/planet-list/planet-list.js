import React, { useState, useEffect } from 'react';

const PlanetList = ({setSelectedItemId, getData}) =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(data => {
            setData(data)
        })
    }, [])

const elements = data.map((planet) => {
    return (
      <li
        key={planet.id}
        onClick={() => setSelectedItemId(planet.id)}
        className="list-group-item"
      >
          {planet.name}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
}

export default PlanetList;
