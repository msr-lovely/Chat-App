import { useState, useEffect } from 'react'
import Header from '../components/Header'
import ChatLog from '../components/ChatLog'

export default function Home() {
  const [chatLog, setChatLog] = useState([])
  const [chatBox, setChatBox] = useState('')
  const [chatSwiper, setChatSwiper] = useState({})
  const [chatDisabled, setChatDisabled] = useState(false)

  // When user press "SEND" to send their new message.
  const sendText = () => {
    if (chatBox === "") return;

    setChatDisabled(true);
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
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>{
      setChatDisabled(false);

      // TODO: retry again, just in case the model is still loading
      if (newLog2.length == 0) return;

      // change isTyping from last chat
      const newLog3 = [...newLog2];
      newLog3[newLog3.length - 1].message = res.res.trim();
      newLog3[newLog3.length - 1].isTyping = false;
      // console.log(res, newLog2);

      setChatLog(newLog3);
    })
    .catch(err=> {
      // TODO: retry again, just in case the model is still loading
    });
  }

  // Scroll to the bottom for each new chat
  useEffect(() => {
    if (Object.keys(chatSwiper).length === 0) return;
    // Scroll the chat history to the bottom
    chatSwiper.update();
    chatSwiper.slideNext(100);
  }, [chatLog]);

  return (
    <>
      <Header />
      <main className="container mx-auto h-screen select-none">
        <div className="chat-container text-xs flex flex-col h-full">
          <ChatLog chatLog={chatLog} setChatSwiper={setChatSwiper} />
          <div className="chat-type flex bg-white">
            <textarea 
              className="flex-grow px-2 py-3 resize-none h-10 outline-none" 
              rows="1" 
              onChange={e=> {setChatBox(e.target.value.replace("\n",""))}} 
              value={chatBox} 
              onKeyPress={
                e=>{
                  if(e.key == "Enter") {
                    sendText(); 
                  } 
                }
              }
            >
            </textarea>
            <button className={`px-4 uppercase font-bold tracking-wide outline-none focus:outline-none ${chatDisabled ? 'text-gray-400 cursor-not-allowed' : 'text-indigo-600 hover:text-indigo-500'}`} onClick={sendText} disabled={chatDisabled}>Send</button>
          </div>
        </div>
        {/* <div className="chat-image flex w-full h-full bg-black justify-items-center items-center">

        </div> */}
      </main>
    </>
  )
}
