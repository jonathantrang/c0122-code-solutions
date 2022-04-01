import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isPaused: false
    });
  }

  render() {
    if (this.state.isPaused) {
      return (
        <div class="row">
          <div class="column-100">
            <div class="circle"></div>
            <div class="playButton"></div>
          </div>
        </div>
      )
    } else if (!this.state.isPaused){
      return (
        <div class="row">
          <div class="column-100">
            <div class="circle"></div>
            <div class="playButton"></div>
          </div>
        </div>
      )
    }
  }
}

export default Stopwatch;
