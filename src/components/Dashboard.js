import React, { Component } from 'react';
import { Box, Grid, MenuItem, Select, Slider, Switch, Typography } from '@material-ui/core'
import DashCard from './DashCard'
import Notifications from './Notifications'

class Dashboard extends Component {
  state = {
    isOnline: true,
    volume: 40,
    quality: 3,
    notifications: []
  }

  onOnlineChange = () => {
    this.setState({ isOnline: !this.state.isOnline })
  }

  onVolumeChange = (event, value) => {
    this.setState({ volume: value })
  }

  onQualityChange = (event) => {
    this.setState({ quality: event.target.value })
  }

  addNewNotification = (message) => {
    this.setState({
      notifications: [...this.state.notifications, message]
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.volume >= 80 && prevState.volume < 80)
      this.addNewNotification("Listening to music at a high volume could cause long-term hearing loss.");
    
    if (this.state.isOnline === false && prevState.isOnline === true)
      this.addNewNotification("Your application is offline. You won't be able to share or stream music to other devices.")
    
    if (this.state.quality === 1 && prevState.quality !== 1)
      this.addNewNotification("Music quality is degraded. Increase quality if your connection allows it.")
  }

  render() {
    console.log(this.state.notifications);
    return (
      <div>
        <Box pt={4} pl={4}>
          <Typography padding={4} variant="h3" fontWeight="bold">
            Welcome, {this.props.username ? this.props.username : 'Guest'}!
          </Typography>
        </Box>
        <Grid container>
          <DashCard
            title="Online Mode"
            description="Is this application connected to the internet?"
          >
            <Switch checked={this.state.isOnline} onChange={this.onOnlineChange} color="primary"/>
          </DashCard>
          <DashCard
            title="Master Volume"
            description="Overrides all other sound settings"
          >
            <Slider step={10} value={this.state.volume} onChange={this.onVolumeChange}/>
          </DashCard>
          <DashCard
            title="Sound Quality"
            description="Manually control the music quality in event of poor connection"
          >
            <Select value={this.state.quality} onChange={this.onQualityChange}>
              <MenuItem value={3}>High</MenuItem>
              <MenuItem value={2}>Medium</MenuItem>
              <MenuItem value={1}>Low</MenuItem>
            </Select>
          </DashCard>
        </Grid>
        <Notifications list={this.state.notifications}/>
      </div>
    );
  }
}
 
export default Dashboard;
