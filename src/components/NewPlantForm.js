import React, { useState } from "react"

const initialValue = {
  name: "",
  image: "",
  price: 0,
}

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState(initialValue)

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const resetForm = () => setFormData(initialValue)

  const sanitizeFormData = () => ({
    ...formData,
    price: Number(formData.price),
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sanitizeFormData()),
    })
      .then(onAddPlant)
      .then(resetForm)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
        />
        <input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
        />
        <input
          onChange={handleChange}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
