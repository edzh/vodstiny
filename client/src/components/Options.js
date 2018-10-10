import React, { Component } from 'react';

class Options extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dateFormat: 'MM-DD-YYYY'
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <select onChange={event => this.setState({dateFormat: event.target.value})}>
            <option value="MM-DD-YYYY">MM-DD-YYYY</option>
            <option value="DD-MM-YYYY">DD-MM-YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Options;
