import React, { useState, useEffect } from 'react';

const StarshipDetails = ({selectedItemId, getData}) =>  {
    const [data, setData] = useState({})

    useEffect(() => {
        getData(selectedItemId)
            .then(data => {
            setData(data)})
            .catch(error => error)
    }, [selectedItemId])

    const {id, name, model, manufacturer, costInCredits, length, crew, passengers, cargoCapacity} = data
    const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`

    return (
      <div className="person-details card">
        <img className="person-image"
          src={imageUrl} />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Model</span>
              <span>{model}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Manufacturer</span>
              <span>{manufacturer}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Cost In Credits</span>
              <span>{costInCredits}</span>
            </li>
              <li className="list-group-item">
              <span className="term">Length</span>
              <span>{length}</span>
            </li>
              <li className="list-group-item">
              <span className="term">Crew</span>
              <span>{crew}</span>
            </li>
              <li className="list-group-item">
              <span className="term">Passengers</span>
              <span>{passengers}</span>
            </li>
              <li className="list-group-item">
              <span className="term">Cargo Capacity</span>
              <span>{cargoCapacity}</span>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default StarshipDetails;
