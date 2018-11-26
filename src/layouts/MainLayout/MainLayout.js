import React, { Component } from "react";
import Header from "./Header/Header";
import LeftDrawer from "./LeftDrawer/LeftDrawer";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import { withRouter } from "react-router";

class MainLayout extends Component {
  state = { open: false };

  handleDrawerOpen = () => this.setState({ open: true });

  handleDrawerClose = () => this.setState({ open: false });

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <Header
          open={open}
          classes={classes}
          handleDrawerOpen={this.handleDrawerOpen}
          logout={this.handleSession}
        />
        <LeftDrawer
          open={open}
          classes={classes}
          theme={theme}
          handleDrawerClose={this.handleDrawerClose}
        />
        <div className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(MainLayout));
