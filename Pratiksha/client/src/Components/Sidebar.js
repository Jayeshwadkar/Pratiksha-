import React, {  useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
} from "@material-ui/core";
import {
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
  ArrowBack as ArrowBackIcon,
} from '@material-ui/icons';
import {  NavLink} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "black",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  logo: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: theme.spacing(1),
  },
  button: {
    color: "white",
    "&:hover": {
      backgroundColor: "#333",
    },
  },
  icon: {
    color: "white",
  },
  text: {
    color: "white",
  },
}));

const Sidebar = () => {
  
  const classes = useStyles();
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <Drawer
  className={classes.drawer}
  variant="permanent"
  classes={{
    paper: classes.drawerPaper,
  }}
>
  <div className={classes.logoContainer}>
    <Avatar alt="Logo" src="/path/to/logo.png" className={classes.logo} />
  </div>
  <Typography variant="h5" className={classes.text}>
    PRATIKSHA
  </Typography>
  <List>
    {selectedButton && (
      <ListItem
        button
        className={classes.button}
        onClick={() => setSelectedButton("")}
      >
        <ListItemIcon>
          <ArrowBackIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText primary="Main Menu" className={classes.text} />
      </ListItem>
    )}
    {!selectedButton && (
      <ListItem
        button 
        className={classes.button}
      >
        <ListItemIcon>
          <MenuIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText primary="Main Menu" className={classes.text} />
      </ListItem>
    )}
  </List>
 
      {selectedButton ? (
        <List>
          {selectedButton === "button1" && (
            <div>
                <ListItem button className={classes.button} component={NavLink} to="/employee" activeClassName={classes.active}>
        <ListItemIcon>
          <HomeIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText primary="Employee" className={classes.text} />
      </ListItem>
              <ListItem button className={classes.button} component={NavLink} to="/drive" activeClassName={classes.active}>
                <ListItemIcon>
                  <ShoppingCartIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Drivers" className={classes.text} />
              </ListItem>
              <ListItem button className={classes.button} component={NavLink} to="/larry" activeClassName={classes.active}>
                <ListItemIcon>
                  <AccountCircleIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Larry Permit" className={classes.text} />
              </ListItem>
            </div>
          )}
          {selectedButton === "button2" && (
            <div>
              <ListItem button className={classes.button} component={NavLink} to="/addbill" activeClassName={classes.active}>
                <ListItemIcon>
                  <HomeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Add Bill" className={classes.text} />
              </ListItem>
              <ListItem button className={classes.button} component={NavLink} to="/viewbill" activeClassName={classes.active}>
                <ListItemIcon>
                  <ShoppingCartIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  primary="View All Bills"
                  className={classes.text}
                />
              </ListItem>
              <ListItem button className={classes.button} component={NavLink} to="/viewpartybill" activeClassName={classes.active}>
                <ListItemIcon>
                  <AccountCircleIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  primary="View Party-Wise Bills"
                  className={classes.text}
                />
              </ListItem>
              <ListItem button className={classes.button} component={NavLink} to="/viewann" activeClassName={classes.active}>
                <ListItemIcon>
                  <HomeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  primary="View Annexture"
                  className={classes.text}
                />
              </ListItem>
              <ListItem button className={classes.button} component={NavLink} to="/report" activeClassName={classes.active}>
                <ListItemIcon>
                  <HomeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Reports" className={classes.text} />
              </ListItem>
              <ListItem button className={classes.button} component={NavLink} to="/addpod" activeClassName={classes.active}>
                <ListItemIcon>
                  <HomeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Add POD" className={classes.text} />
              </ListItem>
            </div>
          )}
          {selectedButton === "button3" && (
            <div>
              <ListItem button className={classes.button} component={NavLink} to="/addrecip" activeClassName={classes.active}>
                <ListItemIcon>
                  <HomeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Add Receipt" className={classes.text} />
              </ListItem>
              <ListItem button className={classes.button} component={NavLink} to="/viewrecip" activeClassName={classes.active}>
                <ListItemIcon>
                  <ShoppingCartIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="View Receipt" className={classes.text} />
              </ListItem>
            </div>
          )}
          {selectedButton === "button4" && (
            <div>
              <ListItem button className={classes.button} component={NavLink} to="/vechicle" activeClassName={classes.active}>
                <ListItemIcon>
                  <HomeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Vechicle" className={classes.text} />
              </ListItem>
              <ListItem button className={classes.button}component={NavLink} to="/maintype" activeClassName={classes.active}>
                <ListItemIcon>
                  <ShoppingCartIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  primary="Maintaince Type"
                  className={classes.text}
                />
              </ListItem>
              <ListItem button className={classes.button} component={NavLink} to="/tyre" activeClassName={classes.active}>
                <ListItemIcon>
                  <AccountCircleIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Tyre" className={classes.text} />
              </ListItem>
              <ListItem button className={classes.button} component={NavLink} to="/tyrefit" activeClassName={classes.active}>
                <ListItemIcon>
                  <HomeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  primary="Tyre Fit/Remove"
                  className={classes.text}
                />
              </ListItem>
            </div>
          )}
          {selectedButton === "button5" && (
            <div>
              <ListItem button className={classes.button} component={NavLink} to="/consgnote" activeClassName={classes.active}>
                <ListItemIcon>
                  <HomeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  primary="Consignment Note"
                  className={classes.text}
                />
              </ListItem>
              <ListItem button className={classes.button} component={NavLink} to="/addcon" activeClassName={classes.active}>
                <ListItemIcon>
                  <ShoppingCartIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  primary="Add Consignor"
                  className={classes.text}
                />
              </ListItem>
              <ListItem button className={classes.button} component={NavLink} to="/podlist" activeClassName={classes.active}>
                <ListItemIcon>
                  <AccountCircleIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="POD List" className={classes.text} />
              </ListItem>
              <ListItem button className={classes.button} component={NavLink} to="/reportbok" activeClassName={classes.active}>
                <ListItemIcon>
                  <HomeIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Report" className={classes.text} />
              </ListItem>
            </div>
          )}
        </List>
      ) : (
        <List>
          <ListItem
            button
            onClick={() => handleButtonClick("button1")}
            className={`${classes.button}`}
          >
            <ListItemIcon>
              <AccountCircleIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Masters" className={classes.text} />
          </ListItem>
          <ListItem
            button
            onClick={() => handleButtonClick("button2")}
            className={classes.button}
          >
            <ListItemIcon>
              <AccountCircleIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Bill" className={classes.text} />
          </ListItem>
          <ListItem
            button
            onClick={() => handleButtonClick("button3")}
            className={classes.button}
          >
            <ListItemIcon>
              <AccountCircleIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Receipt" className={classes.text} />
          </ListItem>
          <ListItem
            button
            onClick={() => handleButtonClick("button4")}
            className={classes.button}
          >
            <ListItemIcon>
              <AccountCircleIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Maintaince" className={classes.text} />
          </ListItem>
          <ListItem
            button
            onClick={() => handleButtonClick("button5")}
            className={classes.button}
          >
            <ListItemIcon>
              <AccountCircleIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Booking Register" className={classes.text} />
          </ListItem>
        </List>
      )}
    </Drawer>
  );
};

export default Sidebar;
