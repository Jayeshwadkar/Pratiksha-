import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { ExitToApp as ExitToAppIcon } from '@material-ui/icons';

const Navbar = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logged out');
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'black',width:'100%' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Your App
        </Typography>
        <Typography variant='h6' >
          Logout
        </Typography>
        <IconButton color="inherit" onClick={handleLogout}>
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
