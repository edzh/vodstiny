import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import videoIds from '../data/videoIds'

function hmsToSecondsOnly(str) {
  var p = str.split(':'),
    s = 0, m = 1;

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }

  return s;
}

const Timestamp = ({ handleChangeTimestamp, timestamp, videoId }) =>
  <NavLink className="no-underline" to={`/v/${videoId}/${timestamp}`}>
    <div className="px-4 py-2 mb-2 shadow-md hover:text-white bg-black text-grey border border-grey-darkest">
      <div className="flex">
        <p className="w-3/4 h-12 float-left font-semibold text-white" >{videoIds[videoId].timestamps[timestamp].category}</p>
        <p className="w-1/4 text-right ml-4 mb-1">{timestamp}</p>
      </div>

      <p>{videoIds[videoId].timestamps[timestamp].topic}</p>
    </div>
  </NavLink>



export default Timestamp;
 // { <tr key={timestamp} className="hover:text-white cursor-pointer" onClick={() => handleChangeTimestamp(hmsToSecondsOnly(timestamp))}>
 //     <td>{timestamp}</td>
 //     <td>{videoIds[videoId].timestamps[timestamp].category}</td>
 //     <td>{videoIds[videoId].timestamps[timestamp].topic}</td>
 //   </tr>
 // }
