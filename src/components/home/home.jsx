import React from 'react'
import LeftSide from './left/leftSide';
import RightSide from './right/rightSide';
import './home.scss'
function Home({ show, setShow }) {
    return (
        <div className='Home container'>
            <LeftSide />
            <RightSide show={show} setShow={setShow} />
        </div>
    )
}

export default Home;