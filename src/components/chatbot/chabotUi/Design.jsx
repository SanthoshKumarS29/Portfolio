import React, { useEffect, useRef, useState } from 'react'
import { useChat } from '../hook/chatContext'


const Design = () => {

  const { state, dispatch } = useChat();
  const [input, setInput] = useState('');

  const messageEndref = useRef(null);

  useEffect(() => {
    messageEndref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages])

  const handleSend = () => {
    const time = new Date().toLocaleTimeString();
    if (input.trim()) {
      // object 
      dispatch({
        type: 'ADD_MESSAGE',
        payload: {
          sender: 'user',
          text: input,
          time,
        },
      });

      setTimeout(() => {
      const lowerInput = input.toLowerCase();

        dispatch({
          type: 'ADD_MESSAGE', payload: {
            sender: 'bot',
            text: null,
            originalUserMessage: input,
            time: new Date().toLocaleTimeString()
          }
        })
      }, 1000)

      setInput('')
    }
  }

  return (
    <div>
      <div className="w-[300px] md:w-[400px] mx-auto h-[450px] border border-[#7a50eb] rounded-2xl shadow-2xl bg-[#0f0f0f] text-white flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#7a50eb] px-4 py-3 text-lg font-bold text-center shadow-md">
          ReactoBot 
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 scrollbar-thin scrollbar-thumb-[#7a50eb]/50 scrollbar-track-transparent scroll-bar">
          {state.messages.map((msg, index) => (
            <div
              key={index}
              className={`w-fit max-w-[80%] px-4 py-2 rounded-2xl shadow-sm text-sm ${msg.sender === 'user'
                  ? 'ml-auto bg-[#7a50eb] text-white rounded-br-none'
                  : 'bg-gray-700 text-white rounded-bl-none'
                }`}
            >
              <p>{msg.text}</p>
              <span className="text-[10px] text-gray-300 block mt-1 text-right">{msg.time}</span>
            </div>
          ))}
          <div ref={messageEndref} />
        </div>

        {/* Input Section */}
        <div className="flex items-center gap-2 border-t border-[#7a50eb]/30 px-4 py-3 bg-[#1a1a1a]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-3 py-2 rounded-xl text-sm text-white bg-[#2a2a2a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7a50eb]/50"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="bg-[#7a50eb] hover:bg-[#6c42e1] transition px-4 py-2 rounded-xl text-sm font-medium"
          >
            Send
          </button>
        </div>
      </div>

    </div>
  )
}

export default Design