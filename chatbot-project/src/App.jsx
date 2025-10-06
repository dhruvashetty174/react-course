import { useState } from 'react'
import './App.css'
import ChatInput from './component/ChatInput';
import ChatMessages from './component/ChatMessages';

function App(){

        const [chatMessages,setChatMessages] = useState([
        ]);
         const [loading, setLoading] = useState(false);
        // console.log(id);
        // const [chatMessages,setChatMessages] = array; //Array destructuring 
        /* const chatMessages = array[0];
        const setChatMessages = array[1];*/

        // const chatMessageComponent= 

        return(
          <div className="app-container">
            
            <ChatMessages chatMessages={chatMessages} loading={loading}/>
            <ChatInput 
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
              setLoading={setLoading}
            />
          </div>
        );
      }

export default App
