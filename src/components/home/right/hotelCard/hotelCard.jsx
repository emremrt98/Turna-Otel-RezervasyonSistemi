import Room1 from '../../../../assets/rooms/room1.jpg';
import './hotelCard.scss';
import { AiOutlineInfoCircle, AiOutlineCheckCircle } from 'react-icons/ai';

import { FaArrowRight } from 'react-icons/fa';
function HotelCard() {
    return (
        <section className='hotelCard'>
            <figure className='hotelCard__img'><img src={Room1} alt="room1" /></figure>
            <article className='hotelCard__generalInfo'>
                <div className='hotelCard__Info'>
                    <h5 className='hotelCard__roomType'>Standart Oda</h5>
                    <div className='hotelCard__advantage'>
                        <span >Erken Rezervasyon İndirimi</span>
                        <span >Ücretsiz İptal <AiOutlineInfoCircle className='hotelCard__icon' /></span>
                        <span >Her Şey Dahil</span>
                    </div>
                    <div className='hotelCard__properties'>
                        <div className='hotelCard__property'>
                            <p><AiOutlineCheckCircle className='hotelCard__icons' />Banyo</p>
                            <p><AiOutlineCheckCircle className='hotelCard__icons' />İnternet</p>
                            <p><AiOutlineCheckCircle className='hotelCard__icons' />Havlu Seti</p>
                        </div>
                        <div className="hotelCard__price">
                            <p>₺1.500</p>
                            <p>₺1.200</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='hotelCard__reservation'>
                    <div className='hotelCard__resInfo'>
                        <p>İki gece için toplam tutardır.</p>
                        <p><AiOutlineInfoCircle className='hotelCard__icon' />DETAYLAR</p>
                    </div>
                    <div className='hotelCard__bookBtn'><button type='button'>Odayı Ayır<FaArrowRight className='hotelCard__icon' /></button></div>
                </div>
            </article>
        </section>
    )
}

export default HotelCard;