import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link className=" no-underline" to={'/v/'}><button className="block text-white mx-auto mt-8 hover:bg-grey-lighter hover:text-grey-darkest rounded bg-grey-darker font-semibold text-lg p-4 shadow-md">Click here to begin watching</button></Link>
      </div>

    );
  }
}

export default Home;
