import React from 'react';
import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';

const Sidebar = () => {
  const contacts = [
    { name: 'Mishal Irfan', time: '2:34PM', status: 'Are you available for meeting?' },
    { name: 'Zunaira Butt', time: '2:34PM', status: 'Incoming' },
    { name: 'Kamran Masood', time: '2:34PM', status: 'Outgoing' },
    // Add more contacts here
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        All Numbers
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Search />
        <InputBase placeholder="Search Chat" sx={{ ml: 1, flex: 1 }} />
      </Box>
      <List>
        {contacts.map((contact, index) => (
          <ListItem button key={index}>
            <ListItemAvatar>
              <Avatar>{contact.name.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={contact.name}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    {contact.status}
                  </Typography>
                  {" — " + contact.time}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;