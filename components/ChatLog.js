import SwiperCore, { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Chat from '../components/Chat'

SwiperCore.use([Mousewheel]);

const ChatLog = ({chatLog, setChatSwiper}) => {
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
                    {chatLog.map((chat, i) => (
                    <Chat key={i} speaker={chat.speaker} isTyping={chat.isTyping}>{chat.message}</Chat>
                    ))}
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ChatLog
