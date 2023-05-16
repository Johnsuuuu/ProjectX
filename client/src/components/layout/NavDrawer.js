import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MemoryIcon from '@mui/icons-material/Memory';
import WatchIcon from '@mui/icons-material/Watch';

const NavDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>

        <ListItem button key="affectioncomputing" component={Link} to="/affectioncomputing">
          <ListItemIcon>
            {<InsertEmoticonIcon />}
          </ListItemIcon>
          <ListItemText primary="Affection Computing" sx={{ marginBottom: '10px', marginTop: '10px' }} />
        </ListItem>
        <ListItem button key="hapticsconfidence" component={Link} to="/hapticsconfidence">
          <ListItemIcon>
            {<ThumbUpOffAltIcon />}
          </ListItemIcon>
          <ListItemText primary="Haptics Confidence" sx={{ marginBottom: '10px', marginTop: '10px' }} />
        </ListItem>
        <ListItem button key="hapticsillusion" component={Link} to="/hapticsillusion">
          <ListItemIcon>
            {<MemoryIcon />}
          </ListItemIcon>
          <ListItemText primary="Haptics Illusion" sx={{ marginBottom: '10px', marginTop: '10px' }} />
        </ListItem>
        <ListItem button key="responsetime" component={Link} to="/responsetime">
        <ListItemIcon>
            {<WatchIcon />}
          </ListItemIcon>
          <ListItemText primary="Haptics Response Time" sx={{ marginBottom: '10px', marginTop: '10px' }} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          style={{ marginTop: '8px', marginLeft: '8px' }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)} sx={{ width: '320px' }} // adjust the width as needed
          PaperProps={{ style: { width: '320px' } }} >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default NavDrawer;
