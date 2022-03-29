import React, { useState, useEffect } from 'react';

const PlanetDetails = ({selectedItemId, getData}) =>  {
    const [data, setData] = useState({})

    useEffect(() => {
        getData(selectedItemId)
            .then(data => {
            setData(data)})
            .catch(error => error)
    }, [selectedItemId])

    const {id, name, population, rotationPeriod, diameter} = data
    const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

    return (
      <div className="person-details card">
        <img className="person-image"
          src={imageUrl} />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default PlanetDetails;
