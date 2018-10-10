import React, { Component } from 'react';

function hmsToSecondsOnly(str) {
  if (!str) {
    return '';
  }

  var p = str.split(':'),
    s = 0, m = 1;

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }

  return s;
}

class TwitchPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: this.props.videoId,
    }
  }

  componentDidMount() {
    this.twitchPlayer = new window.Twitch.Player(this.refs.twitchPlayer, {
      width: this.props.width,
      height: this.props.height,
      video: this.props.videoId
    })
    this.twitchPlayer.setVolume(1);
    this.twitchPlayer.setVideo(`v${this.props.videoId}`, hmsToSecondsOnly(this.props.timestamp))
  }

  componentDidUpdate() {
    if ( this.state.videoId !== this.props.videoId ) {
      this.twitchPlayer && this.twitchPlayer.setVideo(`v${this.props.videoId}`);
      this.setState({
        videoId: this.props.videoId
      })
    } else {
      this.twitchPlayer && this.twitchPlayer.seek(hmsToSecondsOnly(this.props.timestamp));
    }

  }

  handleChangeVideo(video) {
    this.twitchPlayer && this.twitchPlayer.setVideo(this.props.videoId);
  }

  render() {
    return(
      <div>
        <div id="twitchPlayer" ref="twitchPlayer"></div>
      </div>
    );
  }
}

export default TwitchPlayer;
