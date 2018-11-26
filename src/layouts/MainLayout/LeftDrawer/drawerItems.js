import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

export default (
  <React.Fragment>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
  </React.Fragment>
);
