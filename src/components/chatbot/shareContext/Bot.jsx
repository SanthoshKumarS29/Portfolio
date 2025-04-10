import React from 'react'
import { ChatProvider } from '../hook/chatContext'
import Design from '../chabotUi/Design'

const Bot = () => {
  return (
    <ChatProvider>
      <Design />
    </ChatProvider>
  )
}

export default Bot