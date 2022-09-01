import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home.jsx';
import './app.scss';
import Room from './components/home/room/room.jsx';
import { useState } from 'react';

function App() {
  const [exit, setExit] = useState(false);
  return (
    <div className="App ">
      <Navbar />
      <Home />
      <Room exit = {exit} setExit={setExit} />
    </div>
  );
}

export default App;
