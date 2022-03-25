import React, { useState, useEffect } from 'react';
import './item-list.css';

const ItemList = ({setSelectedItemId, swapi}) =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        swapi.getAllPeople().then(data => {
            setData(data)
        })
    }, [])

const elements = data.map((person) => {
    return (
      <li
        key={person.id}
        onClick={() => setSelectedItemId(person.id)}
        className="list-group-item"
      >
          {person.name}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
}

export default ItemList;
