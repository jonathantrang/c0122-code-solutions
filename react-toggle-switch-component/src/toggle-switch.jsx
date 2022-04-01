import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggled: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  }

  render() {
    if (this.state.isToggled) {
      return (
        <div class="row">
          <div class="on" onClick={this.handleClick}>
            <button class="toggleOn">
            </button>
          </div>
          <div>ON</div>
        </div>
      );
    } else if (!this.state.isToggled){
      return (
        <div class="row">
          <div class="off" onClick={this.handleClick}>
            <button class="toggleOff">
            </button>
          </div>
          <div>OFF</div>
        </div>
      );
    }
  }
}


export default ToggleSwitch;
