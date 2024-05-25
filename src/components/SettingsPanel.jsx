import React from 'react';
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { AccountCircle, Settings, Call, Message, Security, Backup, Notifications } from '@mui/icons-material';

const SettingsPanel = () => {
  const settingsItems = [
    { icon: <AccountCircle />, label: 'My Number' },
    { icon: <Settings />, label: 'Subscription' },
    { icon: <Call />, label: 'Call handling' },
    { icon: <Message />, label: 'SMS settings' },
    { icon: <Security />, label: 'Security' },
    { icon: <Backup />, label: 'Backup' },
    { icon: <Notifications />, label: 'Notification' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Settings
      </Typography>
      <List>
        {settingsItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SettingsPanel;