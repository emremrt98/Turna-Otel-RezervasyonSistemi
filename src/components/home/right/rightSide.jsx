import React from 'react';
import './right.scss';
import { AiFillStar } from 'react-icons/ai';
import { FaMapMarker } from 'react-icons/fa';
function RightSide() {
    return (
        <section className='RightSide'>
            <div className='rigtSide__head'>
                <article className='rigtSide__heading'>
                    <h4 className='rigtSide__header'>Rixos Downtown Hotel (9.0)<span><AiFillStar className='rigtSide__icon' /><AiFillStar className='rigtSide__icon' /><AiFillStar className='rigtSide__icon' /></span></h4>
                    <p className='rightSide__map'><span><FaMapMarker /></span> Antalya, Merkez</p>
                </article>
                <button className='rightSide__btn'>Rezervasyon Yap</button>
            </div>
        </section>
    )
}

export default RightSide;