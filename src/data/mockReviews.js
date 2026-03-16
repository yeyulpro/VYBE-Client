//Mock Data Folder > Restaurant reviews

export const mockReviews = [
    {
      id: 1,
      restaurantId: 1,
      userId: 1,
      userName: "Sarah Chen",
      userAvatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      title: "Absolutely incredible!",
      content: "The Black Cod Miso is worth every penny. Service was impeccable and the atmosphere is perfect for special occasions.",
      date: "2026-03-10",
      helpful: 24,
      images: [],
    },
    {
      id: 2,
      restaurantId: 1,
      userId: 2,
      userName: "Michael Ross",
      userAvatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      title: "Best Japanese food in NYC",
      content: "Nobu never disappoints. The Yellowtail Jalapeño is a must-try. Make reservations well in advance!",
      date: "2026-03-08",
      helpful: 18,
      images: [],
    },
    {
      id: 3,
      restaurantId: 3,
      userId: 1,
      userName: "Emily Watson",
      userAvatar: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      title: "Perfect ramen spot",
      content: "The Akamaru Modern is my go-to. Great value and consistently delicious. Can get busy during lunch rush.",
      date: "2026-03-12",
      helpful: 31,
      images: [],
    },
    {
      id: 4,
      restaurantId: 5,
      userId: 2,
      userName: "David Kim",
      userAvatar: "https://i.pravatar.cc/150?img=15",
      rating: 5,
      title: "Italian-American perfection",
      content: "The Spicy Rigatoni is legendary. Service is theatrical and fun. Worth the splurge!",
      date: "2026-03-09",
      helpful: 42,
      images: [],
    },
  ];
  
  export const getReviewsByRestaurant = (restaurantId) => {
    return mockReviews.filter(r => r.restaurantId === parseInt(restaurantId));
  };
  
  export const getAverageRating = (restaurantId) => {
    const reviews = getReviewsByRestaurant(restaurantId);
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / reviews.length).toFixed(1);
  };
  