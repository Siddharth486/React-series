import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Body from './components/Body';
import Header from './components/Header';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

// React.createElement => Object=>  HTML(DOM)
const parent = React.createElement('h1', {}, 'Hello World using React');
/**** @ReactDOM handles the rendering of react component */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout></AppLayout>);