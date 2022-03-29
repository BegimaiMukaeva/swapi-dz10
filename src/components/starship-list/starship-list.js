import React, { useState, useEffect } from 'react';
import './starship-list.css'

const StarshipList = ({setSelectedItemId, getData}) =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(data => {
            setData(data)
        })
    }, [])

const elements = data.map((starship) => {
    return (
      <li
        key={starship.id}
        onClick={() => setSelectedItemId(starship.id)}
        className="list-group-item"
      >
          {starship.name}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
}

export default StarshipList;
