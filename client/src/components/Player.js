import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TimeList from './TimeList'
import TwitchPlayer from './TwitchPlayer'
import VideoList from './VideoList';

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: "311132964",
      timestamp: "0:00:00",
    }
  }

  render() {
    const { videoId, timestamp } = this.state;
    return (
      <div className="flex mx-2">
        <div className="w-48">
          <VideoList />
        </div>
        <div className="w-full">
          <Route exact path={"/v/:videoId/:timestamp?"} render={({ match }) => (
            <TwitchPlayer timestamp={match.params.timestamp} width={"100%"} height={"720"} videoId={match.params.videoId} />
          )} />
        </div>
        <div className="" style={{width: "24rem"}}>
          <Route path={"/v/:videoId"} render={({ match }) => (
            <TimeList timestamp={timestamp} videoId={match.params.videoId} />
          )}/>
        </div>
      </div>
    )
  }
}

export default Player;
