import predefinedResponses from "../../data/predefinedResponses";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      const { text, sender, originalUserMessage } = action.payload;

      let botResponse = text;

      if (sender === 'bot' && !text && originalUserMessage) {
        const userMsg = originalUserMessage.toLowerCase();

        // user qns la keyword pannrathuku
        for (const entry of predefinedResponses) {
          const matchedKeywords = entry.keywords.filter(keyword =>
            userMsg.includes(keyword)
          );

          // Antha line la min 2keyw match aganum
          if (matchedKeywords.length >= 2) {
            botResponse = entry.response;
            break;
          }
        }
      }

      if (!botResponse) {
        botResponse =
          "What type of questions would you ask about Santhosh? I don't know the details. Can you ask him directly if I give you the phno:9751093403, or could you correct any spelling mistakes and retry?";
      }

      return {
        ...state,
        messages: [
          ...state.messages.filter((m) => !m.isTyping),
          { sender, text: botResponse, time: action.payload.time },
        ],
      };

    default:
      return state;
  }
};
