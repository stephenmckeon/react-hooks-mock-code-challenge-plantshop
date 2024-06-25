import React, { useState } from "react"

function PlantCard({ onUpdatePlant, plant: { id, image, name, price } }) {
  const [newPrice, setNewPrice] = useState(price)

  const handleChange = ({ target: { value } }) => setNewPrice(value)

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: Number(newPrice) }),
    }).then(onUpdatePlant)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={newPrice}
        />
        <button type="submit">✅</button>
      </form>
    </li>
  )
}

export default PlantCard
