import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const toggleFetchTrigger = () => setFetchTrigger(!fetchTrigger)

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then(setPlants)
  }, [fetchTrigger])

  return (
    <main>
      <NewPlantForm onAddPlant={toggleFetchTrigger} />
      <Search />
      <PlantList plants={plants} />
    </main>
  )
}

export default PlantPage
