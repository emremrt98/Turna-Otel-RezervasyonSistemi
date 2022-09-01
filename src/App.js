import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home.jsx';
import './app.scss';
import Room from './components/home/room/room.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  useEffect(() => console.log(show), [show]);
  return (
    <div className="App ">
      <Navbar />
      <Home show={show} setShow={setShow} />
      {
        show && <div>
          <Room show={show} setShow={setShow} />
        </div>
      }
    </div>
  );
}

export default App;
