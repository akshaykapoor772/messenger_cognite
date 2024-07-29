import React, { useState, useEffect, useRef } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ChatWindow({ messages, onSendMessage }) {
  const [messageText, setMessageText] = useState('');
  const endOfMessagesRef = useRef(null);

  const handleSend = (event) => {
    event.preventDefault(); 
    if (messageText.trim() !== '') {
      onSendMessage(messageText);
      setMessageText('');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }); 
  }, [messages]);

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <List sx={{ flexGrow: 1, overflow: 'auto', marginBottom: 1 }}>
        {messages.map(msg => (
          <ListItem key={msg.id}>
            <ListItemText primary={msg.text} />
          </ListItem>
        ))}
        {/* Invisible element to mark the end of messages */}
        <div ref={endOfMessagesRef} />
      </List>
      <Box component="form" onSubmit={handleSend} sx={{ display: 'flex', alignItems: 'center', borderTop: 1, borderColor: 'divider' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={messageText}
          onChange={e => setMessageText(e.target.value)}
          sx={{ flexGrow: 1, mr: 1 }}
          autoComplete="off"
          spellCheck="false"
        />
        <Button type="submit" variant="contained">Send</Button>
      </Box>
    </Box>
  );
}

export default ChatWindow;