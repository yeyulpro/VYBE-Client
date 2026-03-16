//Mock Data Folder > Chat history & messages

export const mockChatHistory = [
    {
      id: 1,
      title: "Best sushi under $50",
      lastMessage: "I recommend Ippudo for authentic ramen...",
      timestamp: "2026-03-14T18:30:00",
      messageCount: 8,
      isActive: false,
    },
    {
      id: 2,
      title: "Romantic dinner spots",
      lastMessage: "Nobu and Le Bernardin are excellent choices...",
      timestamp: "2026-03-13T20:15:00",
      messageCount: 12,
      isActive: false,
    },
    {
      id: 3,
      title: "Quick lunch near Union Square",
      lastMessage: "Xi'an Famous Foods is 0.3 miles away...",
      timestamp: "2026-03-12T12:45:00",
      messageCount: 6,
      isActive: false,
    },
    {
      id: 4,
      title: "Italian restaurants with deals",
      lastMessage: "Carbone has a $50 off deal right now...",
      timestamp: "2026-03-11T19:20:00",
      messageCount: 10,
      isActive: false,
    },
  ];
  
  export const mockMessages = {
    1: [ // Chat ID: 1
      {
        id: 1,
        role: "user",
        content: "Best sushi under $50 in Manhattan?",
        timestamp: "2026-03-14T18:25:00",
      },
      {
        id: 2,
        role: "assistant",
        content: "I found some great sushi options under $50 in Manhattan! Here are my top recommendations:",
        timestamp: "2026-03-14T18:25:05",
        restaurants: [3], // Ippudo
      },
      {
        id: 3,
        role: "user",
        content: "What about ramen places?",
        timestamp: "2026-03-14T18:27:00",
      },
      {
        id: 4,
        role: "assistant",
        content: "For ramen, I highly recommend Ippudo! It's only 0.5 miles away and has a 4.6 rating. Their Shiromaru Classic tonkotsu ramen is amazing and costs just $18.",
        timestamp: "2026-03-14T18:27:05",
        restaurants: [3],
      },
    ],
    2: [ // Chat ID: 2
      {
        id: 5,
        role: "user",
        content: "Looking for romantic dinner spots for anniversary",
        timestamp: "2026-03-13T20:10:00",
      },
      {
        id: 6,
        role: "assistant",
        content: "Congratulations on your anniversary! I have some perfect romantic spots for you. Nobu offers an elegant atmosphere with stunning Japanese fusion cuisine, rated 4.8 stars. Le Bernardin is another excellent choice with its 3 Michelin stars and impeccable seafood.",
        timestamp: "2026-03-13T20:10:08",
        restaurants: [1, 7],
      },
    ],
  };
  
  export const getChatById = (id) => {
    return mockChatHistory.find(chat => chat.id === parseInt(id));
  };
  
  export const getMessagesByChatId = (chatId) => {
    return mockMessages[chatId] || [];
  };
  