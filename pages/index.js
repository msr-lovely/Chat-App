import { useState, useEffect } from 'react'
import Header from '../components/Header'
import ChatLog from '../components/ChatLog'

export default function Home() {
  const [chatLog, setChatLog] = useState([])
  const [chatBox, setChatBox] = useState('')
  const [chatSwiper, setChatSwiper] = useState({})
  const sendText = async () => {
    if (chatBox === "") return;

    let chatString = (' ' + chatBox).slice(1);

    let data = {
      inputs: {
        text: chatString,
        generated_responses: [],
        past_user_inputs: []
      }
    }
    chatLog.forEach(log=> {
      if (log.speaker == "me") {
        data.inputs.past_user_inputs.push(log.message);
      } else {
        data.inputs.generated_responses.push(log.message);
      }
    })

    const newLog = [ ...chatLog, 
      {speaker: "me", message: chatString, isTyping: false}, 
    ];
    const newLog2 = [ ...newLog, 
      {speaker: "man", message: "", isTyping: true} 
    ];
    setChatLog(newLog);
    setChatBox("");

    setTimeout(()=> {
      setChatLog(newLog2);
    }, 300);

    fetch('/api/generate', {
      method: 'POST',
      mode: 'cors',
      // headers: {"Authorization": "Bearer " + API_TOKEN},
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>{
      if ((newLog2.length == 0) || res.hasOwnProperty("error")) return;

      const newLog3 = [...newLog2];
      newLog3[newLog3.length - 1].message = res.res.trim();
      newLog3[newLog3.length - 1].isTyping = false;
      // console.log(res, newLog2);

      // change isTyping from last chat
      setChatLog(newLog3);
    });
  }
  useEffect(() => {
    if (Object.keys(chatSwiper).length === 0) return;
    // Scroll the chat history to the bottom
    chatSwiper.update();
    chatSwiper.slideNext(100);
  }, [chatLog])
  return (
    <>
      <Header />
      <main className="container mx-auto h-screen select-none">
        <div className="chat-container text-xs flex flex-col h-full">
          <ChatLog chatLog={chatLog} setChatSwiper={setChatSwiper} />
          <div className="chat-type flex bg-white">
            <textarea className="flex-grow px-2 py-3 resize-none h-10 outline-none" rows="1" onChange={e=>setChatBox(e.target.value)} value={chatBox}></textarea>
            <button className="px-4 uppercase text-indigo-600 font-bold tracking-wide outline-none focus:outline-none hover:text-indigo-500" onClick={sendText} disabled={chatLog.length > 0 ? chatLog[chatLog.length-1].isTyping : false}>Send</button>
          </div>
        </div>
        {/* <div className="chat-image flex w-full h-full bg-black justify-items-center items-center">

        </div> */}
      </main>
    </>
  )
}
