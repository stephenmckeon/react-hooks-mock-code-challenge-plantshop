import React, { useState } from "react"

function PlantStatus() {
  const [isInStock, setIsInStock] = useState(true)

  const handleClick = () => {
    setIsInStock(!isInStock)
  }

  return (
    <>
      {isInStock ? (
        <button onClick={handleClick} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </>
  )
}

export default PlantStatus
