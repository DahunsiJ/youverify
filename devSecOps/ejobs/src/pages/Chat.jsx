// ----------Version 2------------
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import { conversation } from '../assets/chatMessages';

const socket = io('http://localhost:3003');

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [activeUser, setActiveUsers] = useState([]);
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    // Join the chat
    socket.emit('join', currentUser._id);

    // Listen for incoming messages
    socket.on('receiveMessage', (data) => {
      setMessages(prevMessages => [...prevMessages, data]);
    });

    // Listen for active user list updates
    socket.on('recipient', (users) => {
      setActiveUsers(users);
    });

    // Clean up
    return () => {
      socket.off('receiveMessage');
      socket.off('userList');
    };
  }, [currentUser]);

  const sendMessage = () => {
    if (inputMessage) {
      socket.emit('sendMessage', { to: activeUser, message: inputMessage });
      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-grow overflow-y-auto p-4">
        {conversation.map((msg, index) => (
          <div className={`flex w-full ${msg.from === currentUser._id ? 'justify-start' : 'justify-end'}`}>
            <div key={index} className={`p-4 max-w-1/3 my-2 rounded-lg ${msg.from === currentUser._id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
              <strong>{msg.from === currentUser._id ? 'You' : msg.from}</strong>: {msg.message}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t p-4 flex">
        <input 
          value={inputMessage} 
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          className="flex-grow border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        <button 
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
      <div className="border-t p-4">
        <h3 className="font-semibold">Active Users:</h3>
        <div className="flex flex-wrap">
            <div className="p-2 m-2 bg-gray-200 rounded-lg">
              {activeUser}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
