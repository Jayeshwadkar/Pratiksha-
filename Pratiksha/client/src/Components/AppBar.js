import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function ButtonAppBar() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#e0e0e0', marginTop: 5 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Button
            sx={{ color: activeButton === 1 ? 'blue' : '#9e9e9e' }}
            onClick={() => handleButtonClick(1)}
          >
            Dashboard/
          </Button>
          <Button
            sx={{ color: activeButton === 2 ? 'blue' : '#9e9e9e' }}
            onClick={() => handleButtonClick(2)}
          >
            My Dashboard
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
