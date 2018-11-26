import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from '@material-ui/core/Typography';
import classNames from "classnames";

const Header = ({ classes, open, handleDrawerOpen }) => (
  <AppBar
    position="absolute"
    className={classNames(classes.appBar, open && classes.appBarShift)}
  >
    <Toolbar disableGutters={!open}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        className={classNames(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        color="inherit"
        noWrap
        className={classNames(classes.flex)}
      >
        Pokemon Client
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
