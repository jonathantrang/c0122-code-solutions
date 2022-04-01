import React from 'react';
import ReactDOM from 'react-dom';
import ToggleSwitch from './toggle-switch';

const element = (
  <div>
    <ToggleSwitch />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
