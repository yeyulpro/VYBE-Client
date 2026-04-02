//Route Pages > Screen 5: Restaurant grid list ;will hold header, footer, sidebar and grid...


import React from 'react'
import RestaurantGrid from '@/components/restaurant/RestaurantGrid'

const RestaurantsPage = () => {
  return (
    <div className='px-4 bg-cyan-900'>
      <h1>Restaurants Header will go here</h1>
      <RestaurantGrid />
    </div>
  )
}

export default RestaurantsPage