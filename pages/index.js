import { useState, useEffect } from 'react'
import Header from '../components/Header'
import ChatLog from '../components/ChatLog'

export default function Home() {
  const [chatLog, setChat] = useState([])
  const [chatBox, setChatBox] = useState('')
  const [chatSwiper, setChatSwiper] = useState({})
  const sendText = () => {
    if (chatBox === "") return;

    setChat([ ...chatLog, {speaker: "me", message: chatBox} ]);
    setChatBox("");

    // Request reply from server
    
  }
  useEffect(() => {
    if (Object.keys(chatSwiper).length === 0) return;
    // Scroll the chat history to the bottom
    chatSwiper.update()
    chatSwiper.slideNext(100)
  }, [chatLog])
  return (
    <>
      <Header />
      <main className="container mx-auto h-screen select-none">
        <div className="chat-container text-xs flex flex-col h-full">
          <ChatLog chatLog={chatLog} setChatSwiper={setChatSwiper} />
          <div className="chat-type flex bg-white">
            <textarea className="flex-grow px-2 py-3 resize-none h-10 outline-none" rows="1" onChange={e=>setChatBox(e.target.value)} value={chatBox}></textarea>
            <button className="px-4 uppercase text-indigo-600 font-bold tracking-wide outline-none focus:outline-none hover:text-indigo-500" onClick={sendText}>Send</button>
          </div>
        </div>
        {/* <div className="chat-image flex w-full h-full bg-black justify-items-center items-center">

        </div> */}
      </main>
    </>
  )
}

