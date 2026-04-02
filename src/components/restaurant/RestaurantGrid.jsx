// React Components  >  Restaurant Components > Grid of restaurant cards; only includes a group of RestaurantCard components
// having array, map through and display each RestaurantCard component


import React from 'react'
import { mockRestaurants } from '@/data/mockRestaurants'
import RestaurantCard from '@/components/restaurant/RestaurantCard'

const RestaurantGrid = () => {
  return (
    <div>
     {
       <div className="grid grid-cols-1 gap-3 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       {mockRestaurants.map((restaurant) => (
         <RestaurantCard key={restaurant.id} restaurant={restaurant} />
       ))}
     </div>
     }
        
    </div>
  )
}

export default RestaurantGrid