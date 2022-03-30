import React from "react";
import ReactDOM from "react-dom";

function CustomButton() {
  return <button>Click Me!</button>
}

const element = <CustomButton />;
const customButton = ReactDOM.createRoot(document.getElementById('root'));
customButton.render(element);
