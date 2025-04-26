import React, { createContext, useContext, useReducer } from "react";
import { chatReducer } from "./chatReducer";


const chatContext = createContext();

export const ChatProvider = ({ children }) => {
    const initialState = {
        messages: [{ sender: "bot", text:"Hi, I'm Reactobot. I provide some basic details about Santhosh"}]
    }
    
    const [state,dispatch]=useReducer(chatReducer, initialState);
    return(
        <chatContext.Provider value={{state, dispatch}}>
            {children}
        </chatContext.Provider>
    )
}

export const useChat = () => useContext(chatContext);

