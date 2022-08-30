import React from 'react';
import './right.scss';
import { AiFillStar } from 'react-icons/ai';
import { FaMapMarker } from 'react-icons/fa';
import Carousel from './carousel/carousel';
import HotelCard from './hotelCard/hotelCard';
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
            <figure className='rightSide__slider'>
                <Carousel />
                <p className='rightSide__info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, illo exercitationem doloribus mollitia dicta ipsa provident, numquam officiis harum quas expedita, incidunt esse voluptates sequi iure sapiente voluptatibus molestiae ad minima eos tempore molestias aspernatur dolor recusandae! </p>
            </figure>
            <article className='rightSide__card'>
                <HotelCard />
                <HotelCard />
            </article>
        </section>
    )
}

export default RightSide;