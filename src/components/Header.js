import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  }
}))

const Header = ({ isLoggedIn, logout }) => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          Music App
        </Typography>
        {isLoggedIn &&
          <Button onClick={logout} variant="text" color="inherit">sign out</Button>
        }
      </Toolbar>
    </AppBar>
  );
}

export default Header;