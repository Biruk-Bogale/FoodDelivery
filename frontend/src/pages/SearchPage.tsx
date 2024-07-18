import React from 'react'
import { useParams } from 'react-router-dom'

function SearchPage() {
    const {city} = useParams()
  return (
    <span>
      user Serched for {city}
    </span>
  )
}

export default SearchPage
