//Mock Data Folder > Suggestion pills

export const mockSuggestions = [
    {
      id: 1,
      text: "Best sushi under $50 in Manhattan",
      icon: "🍣",
      category: "cuisine",
    },
    {
      id: 2,
      text: "Romantic dinner spots with good wine",
      icon: "🍷",
      category: "occasion",
    },
    {
      id: 3,
      text: "Quick lunch near me under $20",
      icon: "⚡",
      category: "quick",
    },
    {
      id: 4,
      text: "Restaurants with outdoor seating",
      icon: "☀️",
      category: "feature",
    },
    {
      id: 5,
      text: "Best ramen in the city",
      icon: "🍜",
      category: "cuisine",
    },
    {
      id: 6,
      text: "Vegan-friendly restaurants nearby",
      icon: "🥗",
      category: "dietary",
    },
    {
      id: 7,
      text: "Late night food options",
      icon: "🌙",
      category: "time",
    },
    {
      id: 8,
      text: "Brunch spots with bottomless mimosas",
      icon: "🥂",
      category: "brunch",
    },
  ];
  
  export const getSuggestionsByCategory = (category) => {
    if (category === 'all') return mockSuggestions;
    return mockSuggestions.filter(s => s.category === category);
  };
  