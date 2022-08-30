import Room1 from '../../../../assets/rooms/room1.jpg';
import './hotelCard.scss';
import { AiOutlineInfoCircle, AiOutlineCheckCircle } from 'react-icons/ai';
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
                        <p><AiOutlineCheckCircle />Banyo</p>
                        <p><AiOutlineCheckCircle />İnternet</p>
                        <p><AiOutlineCheckCircle />Havlu Seti</p>
                    </div>
                </div>
                <div className="hotelCard__price">
                    <p>₺1.500</p>
                    <p>₺1.200</p>
                </div>
            </article>
        </section>
    )
}

export default HotelCard;