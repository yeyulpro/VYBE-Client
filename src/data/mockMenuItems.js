//Mock Data Folder > Dish/menu items

export const mockMenuItems = [
    // Nobu (Restaurant ID: 1)
    {
      id: 1,
      restaurantId: 1,
      name: "Black Cod Miso",
      description: "Signature dish featuring butter-soft black cod marinated in sweet miso",
      price: 42,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1580959375944-26d996f5aaf1?w=800&q=80",
      isSignature: true,
      dietary: ["Gluten-Free"],
      spicyLevel: 0,
      recommended: true,
    },
    {
      id: 2,
      restaurantId: 1,
      name: "Yellowtail Jalapeño",
      description: "Thinly sliced yellowtail with jalapeño, cilantro, and yuzu soy",
      price: 28,
      category: "Appetizer",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
      isSignature: true,
      dietary: ["Gluten-Free", "Dairy-Free"],
      spicyLevel: 2,
      recommended: true,
    },
    {
      id: 3,
      restaurantId: 1,
      name: "Rock Shrimp Tempura",
      description: "Crispy rock shrimp with creamy spicy sauce",
      price: 32,
      category: "Appetizer",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
      isSignature: true,
      dietary: [],
      spicyLevel: 2,
      recommended: true,
    },
    
    // Sushi Nakazawa (Restaurant ID: 2)
    {
      id: 4,
      restaurantId: 2,
      name: "Omakase Menu",
      description: "20-course chef's selection featuring seasonal fish and specialty preparations",
      price: 180,
      category: "Tasting Menu",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
      isSignature: true,
      dietary: [],
      spicyLevel: 0,
      recommended: true,
    },
    {
      id: 5,
      restaurantId: 2,
      name: "Uni",
      description: "Fresh sea urchin from Hokkaido",
      price: 18,
      category: "Sushi",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
      isSignature: false,
      dietary: ["Gluten-Free"],
      spicyLevel: 0,
      recommended: true,
    },
    
    // Ippudo (Restaurant ID: 3)
    {
      id: 6,
      restaurantId: 3,
      name: "Shiromaru Classic",
      description: "Original tonkotsu ramen with pork belly and kikurage mushrooms",
      price: 18,
      category: "Ramen",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
      isSignature: true,
      dietary: [],
      spicyLevel: 0,
      recommended: true,
    },
    {
      id: 7,
      restaurantId: 3,
      name: "Akamaru Modern",
      description: "Shiromaru with special garlic oil and original spicy sauce",
      price: 19,
      category: "Ramen",
      image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&q=80",
      isSignature: true,
      dietary: [],
      spicyLevel: 2,
      recommended: true,
    },
    {
      id: 8,
      restaurantId: 3,
      name: "Hirata Buns",
      description: "Steamed buns with pork belly, lettuce, and special mayo",
      price: 12,
      category: "Appetizer",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80",
      isSignature: true,
      dietary: [],
      spicyLevel: 0,
      recommended: true,
    },
    
    // Blue Hill (Restaurant ID: 4)
    {
      id: 9,
      restaurantId: 4,
      name: "Seasonal Vegetable Plate",
      description: "Farm-fresh vegetables prepared in various techniques",
      price: 38,
      category: "Appetizer",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
      isSignature: true,
      dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
      spicyLevel: 0,
      recommended: true,
    },
    {
      id: 10,
      restaurantId: 4,
      name: "Heritage Chicken",
      description: "Pasture-raised chicken with seasonal accompaniments",
      price: 48,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80",
      isSignature: true,
      dietary: ["Gluten-Free"],
      spicyLevel: 0,
      recommended: true,
    },
    
    // Carbone (Restaurant ID: 5)
    {
      id: 11,
      restaurantId: 5,
      name: "Spicy Rigatoni",
      description: "Rigatoni with vodka sauce and fresh basil",
      price: 38,
      category: "Pasta",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
      isSignature: true,
      dietary: ["Vegetarian"],
      spicyLevel: 2,
      recommended: true,
    },
    {
      id: 12,
      restaurantId: 5,
      name: "Veal Parmesan",
      description: "Breaded veal cutlet with tomato sauce and mozzarella",
      price: 65,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80",
      isSignature: true,
      dietary: [],
      spicyLevel: 0,
      recommended: true,
    },
    {
      id: 13,
      restaurantId: 5,
      name: "Caesar Alla ZZ",
      description: "Classic caesar salad tableside presentation",
      price: 24,
      category: "Salad",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80",
      isSignature: true,
      dietary: [],
      spicyLevel: 0,
      recommended: true,
    },
  ];
  
  export const getMenuItemsByRestaurant = (restaurantId) => {
    return mockMenuItems.filter(item => item.restaurantId === parseInt(restaurantId));
  };
  
  export const getRecommendedItems = (restaurantId) => {
    return mockMenuItems.filter(
      item => item.restaurantId === parseInt(restaurantId) && item.recommended
    );
  };
  
  export const getSignatureDishes = (restaurantId) => {
    return mockMenuItems.filter(
      item => item.restaurantId === parseInt(restaurantId) && item.isSignature
    );
  };
  