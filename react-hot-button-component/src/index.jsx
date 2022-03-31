import React from 'react';
import ReactDOM from 'react-dom';
import HotButton from './hot-button';

const element = (
  <div>
    <HotButton />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
