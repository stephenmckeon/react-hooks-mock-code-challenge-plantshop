import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchedPlants, setSearchedPlants] = useState([])
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const toggleFetchTrigger = () => setFetchTrigger(!fetchTrigger)

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data)
        setSearchedPlants(data)
      })
  }, [fetchTrigger])

  return (
    <main>
      <NewPlantForm onAddPlant={toggleFetchTrigger} />
      <Search plants={plants} setSearchedPlants={setSearchedPlants} />
      <PlantList plants={searchedPlants} />
    </main>
  )
}

export default PlantPage
