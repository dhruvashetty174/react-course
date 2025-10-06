import { useRef,useEffect } from 'react'
import RobotProfileImage from '../assets/robot.png'
import { ChatMessage } from './ChatMesaage';
import './ChatMessages.css';


 function ChatMessages({ chatMessages, loading }) {
    const chatMessagesRef = useRef(null);
    useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages, loading]);

  return (
    <div
      className="chat-messages-container"
      ref={chatMessagesRef}
    >
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
      {loading && (
        <div className="chat-message-robot">
          <img className="robot-img" src={RobotProfileImage} />
          <div className="chat-message-text">🤖 Bot is typing...</div>
        </div>
      )}
    </div>
  );
}

export default ChatMessages;