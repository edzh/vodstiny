import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import videoIds from '../data/videoIds';

import VideoDate from './VideoDate';

class VideoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dates: {}
    }

    this.toggleDate = this.toggleDate.bind(this);
  }

  componentDidMount() {
    Object.keys(videoIds).forEach(key => {
      this.setState(prevState => ({ dates: {
        ...prevState.dates,
        [videoIds[key].date]: false}
      }));
    })
  }

  toggleDate(date) {
    this.setState(prevState => ({
      dates: {
        ...prevState.dates,
        [date]: !this.state.dates[date]
      }
    }))
  }

  render() {
    const { dates } = this.state;
    Object.keys(dates).forEach(date => {
      console.log(date)
    })
    return(
      <div className="overflow-auto mr-2" style={{height: '720px'}}>
      { Object.keys(dates).map(date =>
        <div key={date} className="mb-2 p-2 bg-black shadow-md block text-grey">
          <p className="mb-2 cursor-pointer" onClick={() => this.toggleDate(date)}>{moment(date, 'MM[/]DD[/]YYYY').format('YYYYMMDD')}</p>
          <div className={dates[date] ? '' : 'hidden'}>
            <VideoDate date={date} />
          </div>
        </div>
        )
      }
      </div>

    );
  }
}

// const VideoList = () =>
//   <div>
//     <div className="">
//       <ul className="overflow-auto list-reset" style={{height: '720px'}}>
//         { Object.keys(videoIds).map( videoId =>
//           <li className="mx-2" key={videoId}>

//           </li>
//         )}
//       </ul>
//     </div>
//   </div>


export default VideoList;
