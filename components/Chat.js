import Avatar from '../components/Avatar'
import ChatTyping from '../components/ChatTyping'

const Chat = ({children, speaker, isTyping}) => {
    return (
        <div class="chat-container grid mb-2">
            {speaker == "me" ? 
                <div>&nbsp;</div> 
            : 
                <Avatar speaker={speaker} />
            }
            <div className={`flex ${speaker == "me" ? "justify-end" : "justify-start"}`}>
                <div className={`chat py-1.5 mx-1 rounded-xl flex items-center px-3 ${speaker == "me" ? "bg-indigo-600 text-white rounded-tr-sm" : "bg-gray-300 rounded-tl-sm"}`}>
                    {isTyping ?
                        <ChatTyping />
                    :
                        children
                    }
                </div>
            </div>
            {speaker != "me" ? 
                <div>&nbsp;</div> 
            : 
                <Avatar speaker={speaker} />
            }
        </div>
    )
}

Chat.defaultProps = {
    speaker: "me",
    isTyping: false
}

export default Chat
