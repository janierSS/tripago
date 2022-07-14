import React, { useState, useEffect } from 'react'

const TripList = () => {
  const [trips, setTrips] = useState([])

  console.log(trips)

  const fetchHandler = () => {
    fetch('http://localhost:3000/trips')
    .then(response => response.json())
    .then(json => setTrips(json))
    .catch(error => alert(error.message))
  }

  useEffect(() => fetchHandler(), [])

  return (
    <div>TripList</div>
  )
}

export default TripList