import React from 'react';
import { TextField, Button, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(9, 0, 0),
    '& > div': {
      margin: theme.spacing(0, 0, 1),
    },
    '& > button': {
      margin: theme.spacing(3, 0, 0),
      padding: theme.spacing(1, 3)
    },
  },
}));

const Login = ({ onLogin, onUsernameChange, username }) => {
  const classes = useStyles();
  return ( 
    <Box className={classes.box}>
      <TextField name="username" label="username" onChange={(e) => onUsernameChange(e)} value={ username }/>
      <TextField name="password" label="password"/>
      <Button variant="contained" color="primary" onClick={onLogin}>sign in</Button>
    </Box>
   );
}
 
export default Login;