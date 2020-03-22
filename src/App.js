import React from 'react';
import Navbar from './components/Navbar';

function App(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}

export default App;
