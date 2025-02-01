import React from 'react';
import ReactDOM from 'react-dom/client';

// We write code for both Machines and Humans but
// first for Human understanding as it is read by a lot of
// developers

/************ @JSX => @React.createElement(converted to babel) => React Element(plain js object rendered into DOM) ************/
/** How JSX and React Elements Work Together
1. JSX is HTML like syntax
2. React element is plain javascript object 
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, World!'
  }
};
React uses this object to create and update the actual DOM. **/


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