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
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { ExitToApp as ExitToAppIcon } from '@material-ui/icons';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastLogin, setLastLogin] = useState(null);

  const handleLogin = () => {
    // Implement your login logic here
    const loginDate = new Date(); // Set the login date and time
    setLastLogin(loginDate); // Update the last login state
    setIsLoggedIn(true); // Set isLoggedIn to true
    console.log('Logged in:', loginDate);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    const logoutDate = new Date(); // Set the logout date and time
    console.log('Logged out:', logoutDate);
    setLastLogin(null); // Clear the last login state
    setIsLoggedIn(false); // Set isLoggedIn to false
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'black', width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {isLoggedIn ? `Last Login: ${lastLogin ? lastLogin.toLocaleString() : ''}` : ''}
        </Typography>
        {isLoggedIn ? (
          <React.Fragment>
            <Typography variant="h6">Logout</Typography>
            <IconButton color="inherit" onClick={handleLogout}>
              <ExitToAppIcon />
            </IconButton>
          </React.Fragment>
        ) : (
          <Typography variant="h6" onClick={handleLogin} style={{ cursor: 'pointer' }}>
            Login
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

