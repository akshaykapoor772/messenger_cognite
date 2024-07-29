import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const friends = [
  { id: 1, name: 'Nathan' },
  { id: 2, name: 'Kratos' },
  { id: 3, name: 'Athena' }
];

function FriendList({ onFriendSelect }) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {friends.map(friend => (
        <ListItem key={friend.id} disablePadding>
          <ListItemButton onClick={() => onFriendSelect(friend.id)}>
            <ListItemText primary={friend.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default FriendList;