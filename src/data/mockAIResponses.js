//Mock Data Folder > AI conversation responses


export const mockAIResponses = {
    sushi: {
      message: "I found some amazing sushi restaurants for you! Based on your preferences, here are my top recommendations:",
      restaurants: [1, 2, 3],
      followUp: [
        "Would you like to see menu recommendations?",
        "Do you need help making a reservation?",
        "Want to see current deals at these restaurants?",
      ],
    },
    
    romantic: {
      message: "For a romantic dinner, I recommend these elegant restaurants with intimate atmospheres:",
      restaurants: [1, 7, 5],
      followUp: [
        "Would you like wine pairing suggestions?",
        "Should I check availability for tonight?",
        "Want to see their signature dishes?",
      ],
    },
    
    quick: {
      message: "Here are some quick and delicious options near you:",
      restaurants: [3, 6, 8],
      followUp: [
        "Would you like to see takeout deals?",
        "Want directions to any of these?",
        "Should I show you their express menus?",
      ],
    },
    
    budget: {
      message: "Great options under $20 per person:",
      restaurants: [6, 8, 3],
      followUp: [
        "Want to see student discounts?",
        "Should I find lunch specials?",
        "Need directions to the closest one?",
      ],
    },
    
    default: {
      message: "I found several restaurants that match your preferences:",
      restaurants: [1, 3, 5, 8],
      followUp: [
        "Would you like more details about any of these?",
        "Want to filter by cuisine type?",
        "Should I show current deals?",
      ],
    },
  };
  
  export const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('sushi') || message.includes('japanese')) {
      return mockAIResponses.sushi;
    }
    if (message.includes('romantic') || message.includes('date') || message.includes('anniversary')) {
      return mockAIResponses.romantic;
    }
    if (message.includes('quick') || message.includes('fast') || message.includes('lunch')) {
      return mockAIResponses.quick;
    }
    if (message.includes('cheap') || message.includes('budget') || message.includes('under')) {
      return mockAIResponses.budget;
    }
    
    return mockAIResponses.default;
  };
  
  export const mockTypingDelay = () => {
    return new Promise(resolve => setTimeout(resolve, 1500));
  };
  