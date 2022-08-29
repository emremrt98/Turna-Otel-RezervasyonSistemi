import React from 'react'
import LeftSide from './left/leftSide';
import RightSide from './right/rightSide';
import './home.scss'
function Home() {
    return (
        <div className='Home container'>
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default Home;