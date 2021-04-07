import SwiperCore, { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Chat from '../components/Chat'

SwiperCore.use([Mousewheel]);

const ChatLog = ({chatLog, setChatSwiper}) => {
    const MY_URL= "https://melisa-surja.me";
    return (
        <div className="chat-log overflow-y-auto flex-grow px-2">
            <Swiper
                direction="vertical" 
                slidesPerView="auto" 
                freeMode={true} 
                mousewheel={{ sensitivity: .5 }} 
                speed={600}
                onSwiper={(swiper) => {
                    setChatSwiper(swiper);
                    swiper.slideNext(0);
                }}
            >
                <SwiperSlide>
                    <Chat speaker="man">
                        <div>
                        This chatbot is brought to you by <a href={MY_URL} className="text-indigo-600 cursor-pointer select-text">Melisa Surja</a>. 
                        <br />
                        Please visit my site to see more of my portfolio!
                        </div>
                    </Chat>
                    <Chat speaker="man">
                        If the AI gets stuck in the beginning loading forever, please refresh the site.
                    </Chat>
                    <Chat speaker="man">
                        Let's have a chat!
                    </Chat>
                    {chatLog.map((chat, i) => (
                    <Chat key={i} speaker={chat.speaker} isTyping={chat.isTyping}>{chat.message}</Chat>
                    ))}
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ChatLog
