import { AppBar, Box, Button, Toolbar } from '@mui/material';
import React, { useState } from 'react';

export default function ButtonAppBar() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#e0e0e0',
          marginTop: 4,
          height: '60px',
          top: '80px',
          left: '15%',
          width: '100%',
          
        }}
      >
        <Toolbar sx={{ justifyContent: 'flex-start' }}>
          <Button
            sx={{ color: activeButton === 1 ? 'blue' : '#9e9e9e', marginLeft: '15%',position:'static' }}
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