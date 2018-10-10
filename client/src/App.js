import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import videoIds from './data/videoIds';

import Player from './components/Player';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Options from './components/Options';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App font-sans">
          <Navbar />
          <div>
            <Route path={'/v/'} component={Player} />
            <Route exact path={'/'} component={Home} />
            <Route path={'/options'} component={Options} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
