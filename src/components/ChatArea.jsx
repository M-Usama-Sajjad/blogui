import React, { useState } from 'react';
import { Box, Typography, Paper, InputBase, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Send } from '@mui/icons-material';

const ChatArea = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello, how are you available for meeting', time: '9:30AM', sender: 'other' },
    { text: 'Hello', time: '9:34AM', sender: 'self' },
    // Add more messages here
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== '') {
      const newMessageObj = {
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: 'self',
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Mishal Irfan
        </Typography>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index} sx={{ justifyContent: message.sender === 'self' ? 'flex-end' : 'flex-start' }}>
              <Paper
                elevation={3}
                sx={{
                  padding: 1,
                  backgroundColor: message.sender === 'self' ? 'primary.main' : 'grey.300',
                  color: message.sender === 'self' ? 'white' : 'black',
                  borderRadius: 2,
                  maxWidth: '60%',
                }}
              >
                <ListItemText primary={message.text} secondary={message.time} />
              </Paper>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ borderTop: '1px solid #e0e0e0', padding: 1 }}>
        <Paper component="form" sx={{ display: 'flex', alignItems: 'center', padding: '2px 4px' }} onSubmit={handleSendMessage}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: '10px' }}>
            <Send />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatArea;
