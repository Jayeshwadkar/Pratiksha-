// import React from 'react';
// import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
// import { ExitToApp as ExitToAppIcon } from '@material-ui/icons';

// const Navbar = () => {
//   const handleLogout = () => {
//     // Implement your logout logic here
//     console.log('Logged out');
//   };

//   return (
//     <AppBar position="static" style={{ backgroundColor: 'black',width:'100%' }}>
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           Last Login:
//         </Typography>
//         <Typography variant='h6' >
//           Logout
//         </Typography>
//         <IconButton color="inherit" onClick={handleLogout}>
//           <ExitToAppIcon />
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, makeStyles } from '@material-ui/core';
import { ExitToApp as ExitToAppIcon, LockOpen as LockOpenIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50%',
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      transition: 'background-color 0.3s ease',
    },
  },
}));

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastLogin, setLastLogin] = useState(null);
  const classes = useStyles();

  const handleLogin = () => {
    const loginDate = new Date();
    setLastLogin(loginDate);
    setIsLoggedIn(true);
    console.log('Logged in:', loginDate);
  };

  const handleLogout = () => {
    const logoutDate = new Date();
    console.log('Logged out:', logoutDate);
    setLastLogin(null);
    setIsLoggedIn(false);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'black', width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {isLoggedIn ? `Last Login: ${lastLogin ? lastLogin.toLocaleString() : ''}` : ''}
        </Typography>
        {isLoggedIn ? (
          <React.Fragment>
            <Button color="inherit" onClick={handleLogout} className={classes.button}>
              <Typography variant="h6">Logout</Typography>
            </Button>
            <IconButton color="inherit" onClick={handleLogout} className={classes.button}>
              <ExitToAppIcon />
            </IconButton>
          </React.Fragment>
        ) : (
          <Button color="inherit" onClick={handleLogin} className={classes.button}>
            <Typography variant="h6" style={{ display: 'flex', alignItems: 'center' }}>
              <LockOpenIcon style={{ marginRight: '5px' }} />
              Login
            </Typography>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
