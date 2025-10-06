
import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css'

function ChatInput({ chatMessages, setChatMessages, setLoading }) {
  const [inputText, setInputText] = useState('');

  function handleKey(event) {
    if (event.key === "Escape") {
      setInputText('');
    } else if (event.key == 'Enter') {
      sendMessage();
    }
  }

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];
    setChatMessages(newChatMessages);
    setLoading(true);

    setTimeout(() => {
      const response = Chatbot.getResponse(inputText);
      setChatMessages([
        ...newChatMessages,
        {
          message: response,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);
      setLoading(false);
    }, 1000); // 1 second delay

    setInputText('');
  }

  return (
    <div className="Chat-input-container">
      <input
        className="chat-input"
        type="text"
        value={inputText} // controlled input
        onChange={saveInputText}
        onKeyDown={handleKey}
        placeholder="Send a message to ChatBot"
        size="50"
      />
      <button
        className="send-button"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;