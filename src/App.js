import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home.jsx';
import './app.scss';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
