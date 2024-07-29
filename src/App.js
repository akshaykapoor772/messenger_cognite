import React, { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import FriendList from './components/FriendList';
import Box from '@mui/material/Box';

function App() {
  const [activeFriend, setActiveFriend] = useState(null);
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : {};
  });

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const handleFriendSelect = (friendId) => {
    setActiveFriend(friendId);
  };

  const handleSendMessage = (text) => {
    const newMessages = { ...messages };
    newMessages[activeFriend] = newMessages[activeFriend] ? [...newMessages[activeFriend]] : [];
    newMessages[activeFriend].push({ id: Date.now(), text });
    setMessages(newMessages);
};

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100%', border: 1, borderColor: 'grey.300' }}>
      <Box sx={{ width: '25%', bgcolor: 'background.paper', borderRight: 1, borderColor: 'grey.300' }}>
        <FriendList onFriendSelect={handleFriendSelect} />
      </Box>
      <Box sx={{ width: '75%', overflow: 'auto' }}>
        {activeFriend && (
          <ChatWindow
            messages={messages[activeFriend] || []}
            onSendMessage={handleSendMessage}
          />
        )}
      </Box>
    </Box>
  );
}

export default App;