import { useState, useEffect } from 'react'
import Header from '../components/Header'
import ChatLog from '../components/ChatLog'

export default function Home() {
  const [chatLog, setChat] = useState([
    { speaker: "me", message: "Lorem ipsum." },
    { speaker: "brother", message: "Lorem ipsum dolor sit asdf sadfa sdds fasdfds sdaf dsafsdf" },
    { speaker: "me", message: "Lorem ipsum." },
    { speaker: "brother", message: "Lorem ipsum dolor sit asdf sadfa sdds fasdfds sdaf dsafsdf" },
    { speaker: "brother", message: "Lorem ipsum dolor sit asdf sadfa sdds fasdfds sdaf dsafsdf" },
    { speaker: "me", message: "Lorem ipsum." },
    { speaker: "brother", message: "Lorem ipsum dolor sit asdf sadfa sdds fasdfds sdaf dsafsdf" },
    { speaker: "brother", message: "Lorem ipsum dolor sit asdf sadfa sdds fasdfds sdaf dsafsdf" },
    { speaker: "me", message: "Lorem ipsum." },
    { speaker: "brother", message: "Lorem ipsum dolor sit asdf sadfa sdds fasdfds sdaf dsafsdf" },
    { speaker: "brother", message: "Lorem ipsum dolor sit asdf sadfa sdds fasdfds sdaf dsafsdf" },
    { speaker: "me", message: "Lorem ipsum." },
    { speaker: "brother", message: "Lorem ipsum dolor sit asdf sadfa sdds fasdfds sdaf dsafsdf" },
    { speaker: "brother", message: "Lorem ipsum dolor sit asdf sadfa sdds fasdfds sdaf dsafsdf" },
  ])
  const [chatBox, setChatBox] = useState('')
  const [chatSwiper, setChatSwiper] = useState({})
  const sendText = () => {
    if (chatBox === "") return;

    setChat([ ...chatLog, {speaker: "me", message: chatBox} ]);
    setChatBox("");
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
      <main className="container mx-auto text-xs h-screen flex flex-col select-none">
        <ChatLog chatLog={chatLog} setChatSwiper={setChatSwiper} />
        <div className="chat-type flex bg-white">
          <textarea className="flex-grow px-2 py-3 resize-none h-10 outline-none" rows="1" onChange={e=>setChatBox(e.target.value)} value={chatBox}></textarea>
          <button className="px-4 uppercase text-indigo-600 font-bold tracking-wide outline-none focus:outline-none hover:text-indigo-500" onClick={sendText}>Send</button>
        </div>
      </main>
    </>
  )
}
