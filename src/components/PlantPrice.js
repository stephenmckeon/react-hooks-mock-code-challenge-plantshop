import React, { useState } from "react"

function PlantPrice({ onUpdatePlant, id, price }) {
  const [newPrice, setNewPrice] = useState(price)
  const [showForm, setShowForm] = useState(false)

  const handleChange = ({ target: { value } }) => setNewPrice(value)

  const toggleForm = () => setShowForm(!showForm)

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: Number(newPrice) }),
    })
      .then(onUpdatePlant)
      .then(toggleForm)
  }

  return (
    <div className="flex">
      <p>Price: </p>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <input
            className="price"
            onChange={handleChange}
            type="number"
            name="price"
            step="0.01"
            placeholder="Price"
            value={newPrice}
          />
          <button type="submit">✅</button>
        </form>
      ) : (
        <p className="price" onClick={toggleForm}>
          {price}
        </p>
      )}
    </div>
  )
}

export default PlantPrice
