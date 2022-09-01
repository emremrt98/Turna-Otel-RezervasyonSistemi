import Carousel from './carousel/carousel';
import HotelCard from './hotelCard/hotelCard';
import HotelProperties from './hotelProperties/hotelProperties';
import './right.scss';
import { AiFillStar } from 'react-icons/ai';
import { FaMapMarker } from 'react-icons/fa';
import Room1 from '../../../assets/rooms/room1.jpg';
import Room2 from '../../../assets/rooms/room2.jpg';
import Hotel1 from '../../../assets/hotels/hotel1.jpg';
import Hotel2 from '../../../assets/hotels/hotel2.jpg';
import Hotel3 from '../../../assets/hotels/hotel3.jpg';
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

    const hotelPropertiesInfo = [
        {
            header: "Otel Özellikleri",
            col1: ["Sauna", "Bar", "Spa Merkezi", "TV Salonu", "Havaalanı Servisi"],
            col2: ["Market", "Masaj", "Kapalı Restoran", "Engelli Odaları"],
            col3: ["Hamam", "Açık Restoran", "Otopark", "Araç Kiralama"]
        },
        {
            header: "Otel Koşulları",
            col1: ["Sauna", "Bar", "Spa Merkezi", "TV Salonu", "Havaalanı Servisi"],
            col2: ["Market", "Masaj", "Kapalı Restoran", "Engelli Odaları"],
            col3: ["Hamam", "Açık Restoran", "Otopark", "Araç Kiralama"]
        }
    ]

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
                <Carousel img1={Hotel1} img2={Hotel2} img3={Hotel3} />
                <p className='rightSide__info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, illo exercitationem doloribus mollitia dicta ipsa provident, numquam officiis harum quas expedita, incidunt esse voluptates sequi iure sapiente voluptatibus molestiae ad minima eos tempore molestias aspernatur dolor recusandae! </p>
            </figure>
            <article className='rightSide__card'>
                <HotelCard hotelRoomInfo={hotelRoomInfo[0]} />
                <br />
                <HotelCard hotelRoomInfo={hotelRoomInfo[1]} />
            </article>
            <hr className='hr' />
            <article className='rightSide__hotelProperties'>
                <HotelProperties hotelPropertiesInfo={hotelPropertiesInfo[0]} />
                <hr className='hr' />
                <HotelProperties hotelPropertiesInfo={hotelPropertiesInfo[1]} />
            </article>
        </section>
    )
}

export default RightSide;