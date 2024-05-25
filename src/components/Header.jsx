import { Divider, IconButton, Toolbar, Typography, Badge } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import { CallMissedSharp } from "@mui/icons-material";
import SideDrawer from '../components/SideDrawer'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",

  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <SideDrawer>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        </SideDrawer>
          <Typography variant="h6" className={classes.title}>
            Blogging Website
          </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <CircleNotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />

      <Toolbar className={classes.tagline}>
        Express your emotions through words
      </Toolbar>
     
    </>
  );
};

export default Header;
