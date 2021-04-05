import Header from '../components/Header'
import Chat from '../components/Chat'

export default function Home() {
  return (
    <>
      <Header />
      <main class="container mx-auto text-xs h-screen flex flex-col">
        <div class="chat-history overflow-y-auto py-2 flex-grow">
          <Chat>Lorem ipsum</Chat>
          <Chat speaker="brother">Lorem ipsum dolor sit </Chat>
          <Chat speaker="brother">Lorem ipsum dolor sit asdf sadfa sdds fasdfds sdaf dsafsdf </Chat>
          <Chat>Lorem ipsum</Chat>
          <Chat speaker="brother">Lorem ipsum dolor sit </Chat>
          <Chat speaker="brother">Lorem ipsum dolor sit asdf sadfa sdds fasdfds sdaf dsafsdf </Chat>
          <Chat>Lorem ipsum</Chat>
          <Chat speaker="brother">Lorem ipsum dolor sit </Chat>
          <Chat speaker="brother">Lorem ipsum dolor sit asdf sadfa sdds fasdfds sdaf dsafsdf </Chat>
          <Chat>Lorem ipsum</Chat>
          <Chat speaker="brother">Lorem ipsum dolor sit </Chat>
          <Chat speaker="brother" isTyping={true}>Lorem ipsum dolor sit asdf sadfa sdds fasdfds sdaf dsafsdf</Chat>
        </div>
        <div class="chat-type flex bg-white">
          <textarea class="flex-grow px-2 py-2 resize-none" rows="1"></textarea>
          {/* <button class="px-3 uppercase">Send</button> */}
        </div>
      </main>
    </>
  )
}
