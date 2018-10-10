import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import videoIds from '../data/videoIds';

class VideoDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "09/17/2018"
    }
  }

  render() {
    const { date } = this.props;
    
    Object.keys(videoIds).forEach(video => 
      console.log(videoIds[video].date)
    )

    return (
      <div>
        { Object.keys(videoIds)
          .filter(video => videoIds[video].date === date)
          .map(video => 
            <NavLink className="mb-2 p-2 bg-grey-darkest shadow-md block text-grey hover:text-white no-underline" activeClassName="bg-grey-darker" to={`/v/${video}`}>
              {video}
            </NavLink>
          )
        }
      </div>
    );
  }
}

export default VideoDate;
