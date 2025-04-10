
import predefinedResponses from "../../data/predefinedResponses";


export const chatReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_MESSAGE':
            const {text, sender, originalUserMessage} = action.payload;

            let botResponse = text;
            if(sender === 'bot' && !text && originalUserMessage){
                const userMsg = originalUserMessage.toLowerCase();
                for (const entry of predefinedResponses){
                    if (entry.patterns.some(p => userMsg.includes(p))){
                        botResponse = entry.response;
                        break;
                    }
                }
            }
            if(!botResponse){
                botResponse = "can't Understand Your message"
            }
            return {
                ...state,
                messages: [
                    ...state.messages.filter(m => !m.isTyping), {sender, text: botResponse, time: action.payload.time}
                ]
            }
        
        default:
            return state;
    }
}