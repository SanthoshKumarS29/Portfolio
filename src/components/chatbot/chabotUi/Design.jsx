import React, { useEffect, useRef, useState } from 'react'
import { useChat } from '../hook/chatContext'


const Design = () => {

    const { state, dispatch} = useChat();
    const [input, setInput] = useState('');

    const messageEndref = useRef(null);

    useEffect(() => {
      messageEndref.current?.scrollIntoView({behavior: 'smooth'});
    },[state.messages])

    const handleSend = () => {
      const time = new Date().toLocaleTimeString();
      if(input.trim()){
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

          dispatch({type: 'ADD_MESSAGE', payload: {
            sender: 'bot',
            text: null,
            originalUserMessage: input,
            time: new Date().toLocaleTimeString()
          }})
        }, 1000)

        setInput('')
      }
    }
    // typing dot animation matum pakaum

  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <div className="max-w-md mx-auto p-4 border border-[#7a50eb] rounded-lg shadow-lg bg-black text-white">
          <h2 className="text-lg font-bold my-2 text-[#7a50eb]">Chatbot</h2>
          <div className="h-80 overflow-y-auto p-2 space-y-6 border-b border-gray-600">
            {state.messages.map((msg, index) => (
              <div key={index} className={`p-2 rounded-lg max-w-[80%] ${msg.sender === 'user' ? 'bg-[#7a50eb] text-white self-end ml-auto' : 'bg-gray-600 text-white self-start'}`}>
                  <p>{msg.text}</p>
                <span className="text-xs text-gray-300 block mt-1">{msg.time}</span>
              </div>
            ))}
            <div ref={messageEndref} />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-2 rounded-lg text-black"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="bg-[#7a50eb] px-4 py-2 rounded-lg hover:bg-[#6e43e3] transition"
            >
              Send
            </button>
          </div>
        </div>
    </div>
  )
}

export default Design