import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home.jsx';
import './app.scss';
import Room from './components/home/room/room.jsx';
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/DotLoader";

function App() {
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <div className="App ">
      {
        loader ?
          <div className='loader'><ClipLoader color='#FF3200' loading={loader} size={100} /></div>
          :
          <div>
            <Navbar />
            <Home show={show} setShow={setShow} />
            {
              show && <div>
                <Room show={show} setShow={setShow} />
              </div>
            }
          </div>
      }
    </div>
  );
}

export default App;
