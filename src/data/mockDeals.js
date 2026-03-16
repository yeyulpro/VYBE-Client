//Mock Data Folder > Mock deal list data

export const mockDeals = [
    {
      id: 1,
      restaurantId: 1,
      restaurantName: "Nobu",
      title: "20% Off Dinner",
      description: "Get 20% off your entire dinner bill when you dine in Tuesday-Thursday",
      discount: "20%",
      discountType: "percentage",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
      category: "Dinner",
      validUntil: "2026-04-15",
      terms: "Valid Tuesday-Thursday only. Cannot be combined with other offers. Excludes beverages.",
      minimumSpend: 100,
      maxDiscount: 50,
      usageCount: 1243,
      tags: ["Fine Dining", "Japanese"],
      code: "NOBU20",
      isActive: true,
      featured: true,
    },
    {
      id: 2,
      restaurantId: 3,
      restaurantName: "Ippudo",
      title: "Free Appetizer",
      description: "Get a free appetizer with any ramen purchase during lunch hours",
      discount: "Free Item",
      discountType: "freeItem",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
      category: "Lunch",
      validUntil: "2026-03-31",
      terms: "Valid 11 AM - 3 PM Monday-Friday. One per customer. Free appetizer valued up to $8.",
      minimumSpend: 15,
      maxDiscount: 8,
      usageCount: 892,
      tags: ["Ramen", "Lunch Special"],
      code: "IPPUDO-LUNCH",
      isActive: true,
      featured: false,
    },
    {
      id: 3,
      restaurantId: 5,
      restaurantName: "Carbone",
      title: "$50 Off Prix Fixe",
      description: "Save $50 on our chef's tasting menu for parties of 4 or more",
      discount: "$50",
      discountType: "fixed",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      category: "Dinner",
      validUntil: "2026-04-30",
      terms: "Valid for parties of 4 or more. Advance reservation required. Sunday-Wednesday only.",
      minimumSpend: 200,
      maxDiscount: 50,
      usageCount: 567,
      tags: ["Italian", "Fine Dining"],
      code: "CARBONE50",
      isActive: true,
      featured: true,
    },
    {
      id: 4,
      restaurantId: 8,
      restaurantName: "Shake Shack",
      title: "BOGO Burgers",
      description: "Buy one burger, get one free every Monday",
      discount: "BOGO",
      discountType: "bogo",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
      category: "Brunch",
      validUntil: "2026-12-31",
      terms: "Valid Mondays only. Equal or lesser value. Limit one per customer.",
      minimumSpend: 10,
      maxDiscount: 15,
      usageCount: 3421,
      tags: ["Burgers", "Casual"],
      code: "SHAKE-MONDAY",
      isActive: true,
      featured: false,
    },
    {
      id: 5,
      restaurantId: 4,
      restaurantName: "Blue Hill",
      title: "30% Off Happy Hour",
      description: "30% off all small plates and drinks during happy hour",
      discount: "30%",
      discountType: "percentage",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      category: "Happy Hour",
      validUntil: "2026-05-15",
      terms: "Valid 5-7 PM Tuesday-Friday. Bar seating only. Small plates and select drinks.",
      minimumSpend: 30,
      maxDiscount: 40,
      usageCount: 734,
      tags: ["Farm-to-Table", "Happy Hour"],
      code: "BLUEHILL-HH",
      isActive: true,
      featured: true,
    },
    {
      id: 6,
      restaurantId: 6,
      restaurantName: "Xi'an Famous Foods",
      title: "15% Off Takeout",
      description: "Save 15% on all takeout orders over $25",
      discount: "15%",
      discountType: "percentage",
      image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80",
      category: "Takeout",
      validUntil: "2026-06-30",
      terms: "Takeout orders only. Minimum $25 purchase. Order through our app or website.",
      minimumSpend: 25,
      maxDiscount: 20,
      usageCount: 2103,
      tags: ["Chinese", "Takeout"],
      code: "XIAN15",
      isActive: true,
      featured: false,
    },
  ];
  
  export const getDealById = (id) => {
    return mockDeals.find(d => d.id === parseInt(id));
  };
  
  export const getDealsByCategory = (category) => {
    if (category === 'All Deals') return mockDeals;
    return mockDeals.filter(d => d.category === category);
  };
  
  export const getFeaturedDeals = () => {
    return mockDeals.filter(d => d.featured);
  };
  
  export const getActiveDeal = () => {
    return mockDeals.filter(d => d.isActive);
  };
  