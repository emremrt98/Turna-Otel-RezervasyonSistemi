import React from 'react';
import './right.scss';
import { AiFillStar } from 'react-icons/ai';
import { FaMapMarker } from 'react-icons/fa';
import Carousel from './carousel/carousel';
import HotelCard from './hotelCard/hotelCard';
import Room1 from '../../../assets/rooms/room1.jpg';
import Room2 from '../../../assets/rooms/room2.jpg';
function RightSide() {
    const hotelRoomInfo = [
        {
            name: "Standart Oda",
            img: Room1,
            advantage: ["Erken Rezervasyon İndirimi", "Ücretsiz İptal", "Her Şey Dahil"],
            property: ["Banyo", "İnternet", "Havlu Seti"],
            price: "1.500",
            opportunityPrice: "1.200",
        },
        {
            name: "İki Balkonlu Oda (Delux)",
            img: Room2,
            advantage: ["Erken Rezervasyon İndirimi", "Ücretsiz İptal", "Her Şey Dahil"],
            property: ["Banyo", "İnternet", "Havlu Seti"],
            price: "2.000",
            opportunityPrice: "1.700",
        }
    ]
    console.log(hotelRoomInfo[0].property);
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
                <HotelCard hotelRoomInfo={hotelRoomInfo[0]} />
                <br />
                <HotelCard hotelRoomInfo={hotelRoomInfo[1]} />
            </article>
        </section>
    )
}

export default RightSide;