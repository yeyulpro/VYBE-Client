//Mock Data Folder > User profiles for auth

export const mockUsers = [
    {
      id: 1,
      email: "demo@vybe.ai",
      password: "password123", // In real app, this would be hashed
      name: "Alex Morgan",
      avatar: "https://i.pravatar.cc/150?img=1",
      phone: "+1 (555) 123-4567",
      preferences: {
        cuisine: ["Japanese", "Italian"],
        dietary: ["Vegetarian"],
        priceRange: "$$",
      },
      savedRestaurants: [1, 2, 5],
      recentSearches: ["sushi near me", "romantic dinner", "quick lunch"],
      createdAt: "2026-01-15T10:00:00",
    },
    {
      id: 2,
      email: "user@example.com",
      password: "test123",
      name: "Jordan Smith",
      avatar: "https://i.pravatar.cc/150?img=2",
      phone: "+1 (555) 987-6543",
      preferences: {
        cuisine: ["American", "Chinese"],
        dietary: [],
        priceRange: "$$$",
      },
      savedRestaurants: [3, 4, 6],
      recentSearches: ["ramen", "burgers"],
      createdAt: "2026-02-20T14:30:00",
    },
  ];
  
  export const authenticateUser = (email, password) => {
    return mockUsers.find(u => u.email === email && u.password === password);
  };
  
  export const getUserById = (id) => {
    return mockUsers.find(u => u.id === parseInt(id));
  };
  
  export const registerUser = (userData) => {
    const newUser = {
      id: mockUsers.length + 1,
      ...userData,
      avatar: `https://i.pravatar.cc/150?img=${mockUsers.length + 1}`,
      preferences: {
        cuisine: [],
        dietary: [],
        priceRange: "$$",
      },
      savedRestaurants: [],
      recentSearches: [],
      createdAt: new Date().toISOString(),
    };
    mockUsers.push(newUser);
    return newUser;
  };
  