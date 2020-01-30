import React from 'react';
import { Box, Typography } from '@material-ui/core'

const Notifications = ({ list }) => {
  return (
    <Box padding={4}>
      <Box mb={2}>
        <Typography variant="h4" component="h1">
          Notifications
        </Typography>
      </Box>
      {list.map((notification, index) => {
        return (
          <Typography variant="body1" component="p" key={index}>
          {notification}
          </Typography>
        )
      })}
    </Box>
  );
}
 
export default Notifications;