import * as React from 'react';
import
{ List,
 ListItem,
 ListItemButton,
 ListItemText, 
 Container
}
from '@mui/material';



export const ViewAddedPanelMembers = () => {
  return (
      <Container maxWidth="lg">
    <List >
      <ListItem>
      <ListItemButton>
      <ListItemText primary="Group 01" />
      </ListItemButton>
    </ListItem>
    </List>
    <List >
      <ListItem>
      <ListItemButton>
      <ListItemText primary="Group 02" />
      </ListItemButton>
    </ListItem>
    </List>
    <List >
      <ListItem>
      <ListItemButton>
      <ListItemText primary="Group 03" />
      </ListItemButton>
    </ListItem>
    </List>
    <List >
      <ListItem>
      <ListItemButton>
      <ListItemText primary="Group 04" />
      </ListItemButton>
    </ListItem>
    </List>
    </Container>
  )
}
