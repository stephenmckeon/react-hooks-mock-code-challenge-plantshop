import React from "react"

import PlantPrice from "./PlantPrice"

function PlantCard({ onUpdatePlant, plant: { id, image, name, price } }) {
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <PlantPrice onUpdatePlant={onUpdatePlant} id={id} price={price} />
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  )
}

export default PlantCard
