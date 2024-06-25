import React, { useState } from "react"

function Search({ plants, setSearchedPlants }) {
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase()

    setSearchedPlants(
      plants.filter((plant) => {
        const plantName = plant.name.toLowerCase()

        return plantName.startsWith(searchValue)
      })
    )
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search
