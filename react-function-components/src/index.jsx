import React from "react";
import ReactDOM from "react-dom";

class CustomButton extends React.Component {
  render() {
    return <button>Click Me!</button>;
  }
}

const element = <CustomButton />;
const customButton = ReactDOM.createRoot(document.getElementById('root'));
customButton.render(element);
