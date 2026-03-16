//Mock Data Folder >Map markers & coordinates

export const mockMapMarkers = [
    {
      id: 1,
      restaurantId: 1,
      name: "Nobu",
      coordinates: { lat: 40.7128, lng: -74.0060 },
      rating: 4.8,
      priceRange: "$$$$",
      cuisine: "Japanese",
    },
    {
      id: 2,
      restaurantId: 2,
      name: "Sushi Nakazawa",
      coordinates: { lat: 40.7282, lng: -74.0076 },
      rating: 4.9,
      priceRange: "$$$$",
      cuisine: "Japanese",
    },
    {
      id: 3,
      restaurantId: 3,
      name: "Ippudo",
      coordinates: { lat: 40.7295, lng: -73.9903 },
      rating: 4.6,
      priceRange: "$$",
      cuisine: "Japanese",
    },
    {
      id: 4,
      restaurantId: 4,
      name: "Blue Hill",
      coordinates: { lat: 40.7308, lng: -73.9973 },
      rating: 4.7,
      priceRange: "$$$",
      cuisine: "American",
    },
    {
      id: 5,
      restaurantId: 5,
      name: "Carbone",
      coordinates: { lat: 40.7265, lng: -74.0027 },
      rating: 4.8,
      priceRange: "$$$$",
      cuisine: "Italian",
    },
    {
      id: 6,
      restaurantId: 6,
      name: "Xi'an Famous Foods",
      coordinates: { lat: 40.7156, lng: -73.9970 },
      rating: 4.5,
      priceRange: "$",
      cuisine: "Chinese",
    },
    {
      id: 7,
      restaurantId: 7,
      name: "Le Bernardin",
      coordinates: { lat: 40.7614, lng: -73.9776 },
      rating: 4.9,
      priceRange: "$$$$",
      cuisine: "French",
    },
    {
      id: 8,
      restaurantId: 8,
      name: "Shake Shack",
      coordinates: { lat: 40.7414, lng: -73.9882 },
      rating: 4.4,
      priceRange: "$",
      cuisine: "American",
    },
  ];
  
  export const mockUserLocation = {
    lat: 40.7282,
    lng: -74.0060,
  };
  
  export const getMarkersNearLocation = (location, radiusMiles = 2) => {
    // Simple distance calculation (not accurate, just for mock)
    return mockMapMarkers.filter(marker => {
      const latDiff = Math.abs(marker.coordinates.lat - location.lat);
      const lngDiff = Math.abs(marker.coordinates.lng - location.lng);
      const distance = Math.sqrt(latDiff ** 2 + lngDiff ** 2) * 69; // Rough miles
      return distance <= radiusMiles;
    });
  };
  