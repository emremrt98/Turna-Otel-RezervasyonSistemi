import React from 'react';
import './right.scss';
import { AiFillStar } from 'react-icons/ai';
import { FaMapMarker } from 'react-icons/fa';
function RightSide() {
    return (
        <section className='RightSide'>
            <div className='rigtSide__head'>
                <article className='rigtSide__heading'>
                    <h4 className='rigtSide__header'>Rixos Downtown Hotel (9.0)<AiFillStar /><AiFillStar /><AiFillStar /></h4>
                    <p className='rightSide__map'><FaMapMarker />Antalya, Merkez</p>
                </article>
                <button>Rezervasyon Yap</button>
            </div>
        </section>
    )
}

export default RightSide;