import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ handleUpdatePlant, plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          onUpdatePlant={handleUpdatePlant}
          plant={plant}
        />
      ))}
    </ul>
  )
}

export default PlantList
