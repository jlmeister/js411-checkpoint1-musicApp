import React from 'react';
import { Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '250px',
    margin: theme.spacing(4),
    padding: theme.spacing(1),
  },
  title: {
    marginBottom: '10px'
  },
}))

const DashCard = ({title, description, children}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} elevation={4} position="relative">
      <CardContent >
        <Typography variant="h6" component="h1" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {children}
      </CardActions>
    </Card>
  );
}
 
export default DashCard;