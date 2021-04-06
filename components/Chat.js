import PropTypes from 'prop-types'
import Avatar from '../components/Avatar'
import ChatTyping from '../components/ChatTyping'

const Chat = ({children, speaker, isTyping}) => {
    return (
        <div className="chat-grid grid mb-2">
            {speaker == "me" ? 
                <div>&nbsp;</div> 
            : 
                <Avatar speaker={speaker} />
            }
            <div className={`flex ${speaker == "me" ? "justify-end" : "justify-start"}`}>
                <div className={`chat whitespace-pre-wrap shadow py-1.5 mx-1 rounded-xl flex items-center px-3 ${speaker == "me" ? "bg-indigo-600 text-white rounded-tr-sm" : "bg-white rounded-tl-sm"}`}>
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

Chat.propTypes = {
    speaker: PropTypes.string,
    isTyping: PropTypes.bool
}

export default Chat
