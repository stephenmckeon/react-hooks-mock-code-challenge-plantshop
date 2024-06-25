import React from "react"

function PlantDelete({ id, onUpdatePlant }) {
  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    }).then(onUpdatePlant)
  }

  return (
    <button
      onClick={handleDelete}
      style={{ background: "red", color: "white" }}
    >
      Delete
    </button>
  )
}

export default PlantDelete
