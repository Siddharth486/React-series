import React from 'react';
import ReactDOM from 'react-dom/client';

// We write code for both Machines and Humans but
// first for Human understanding as it is read by a lot of
// developers

// JSX
const heading = (
  <div>
    <h1>heading</h1>
  </div>
);
console.log(heading);

// React.createElement => Object=>  HTML(DOM)
const parent = React.createElement('h1',{},'Hello World using React');
/**** @ReactDOM handles the rendering of react component */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);