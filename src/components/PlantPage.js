import React, { useEffect, useState } from "react"

import { searchByAttr } from "../utils/helpers"

import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [fetchTrigger, setFetchTrigger] = useState(false)
  const [search, setSearch] = useState("")

  const toggleFetchTrigger = () => setFetchTrigger(!fetchTrigger)

  const filteredPlants = searchByAttr(plants, search, "name")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then(setPlants)
  }, [fetchTrigger])

  return (
    <main>
      <NewPlantForm onAddPlant={toggleFetchTrigger} />
      <Search setSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  )
}

export default PlantPage
