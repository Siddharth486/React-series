import React from 'react';
import ReactDOM from 'react-dom/client';

// We write code for both Machines and Humans but
// first for Human understanding as it is read by a lot of
// developers

// JSX
// const heading = (
//   <div>
//     <h1>heading</h1>
//   </div>
// );
// console.log(heading);

// React component
const Heading2 = ()=>(<div><h2>Shorter Heading</h2></div>)
/**component inside another component => @component_composition */ 
const Heading= ()=>(<div><h1>Bigger Heading</h1><Heading2/></div>)

// React.createElement => Object=>  HTML(DOM)
const parent = React.createElement('h1',{},'Hello World using React');
/**** @ReactDOM handles the rendering of react component */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading/>);