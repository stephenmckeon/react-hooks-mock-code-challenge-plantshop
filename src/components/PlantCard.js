import React from "react"

import PlantPrice from "./PlantPrice"
import PlantStatus from "./PlantStatus"

function PlantCard({ onUpdatePlant, plant: { id, image, name, price } }) {
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <PlantPrice onUpdatePlant={onUpdatePlant} id={id} price={price} />
      <PlantStatus />
    </li>
  )
}

export default PlantCard
