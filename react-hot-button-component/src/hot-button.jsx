import React from "react";
import ReactDOM from "react-dom";

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {click: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({click: this.state.click + 1});
  }

  render() {
    if (this.state.click < 3) {
      return <button>Hot Button</button>;
    } else if (this.state.click < 6) {
      return <button class="warmButton" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.click < 9) {
      return <button class="heatingButton" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.click < 12) {
      return <button class="fireButton" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.click < 15) {
      return <button class="nuclearButton" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.click < 18) {
      return <button class="meltdownButton" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.click >= 18) {
      return <button class="falloutButton" onClick={this.handleClick}>Hot Button</button>;
    }
  }
}
export default HotButton;
