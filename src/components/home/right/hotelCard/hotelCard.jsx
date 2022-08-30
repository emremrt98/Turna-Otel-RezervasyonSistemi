import './hotelCard.scss';
import { AiOutlineInfoCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';

function HotelCard({ hotelRoomInfo: { name, img, advantage: [adv1, adv2, adv3], property, price, opportunityPrice } }) {

    return (
        <section className='hotelCard'>
            <figure className='hotelCard__img'><img src={img} alt="room1" /></figure>
            <article className='hotelCard__generalInfo'>
                <div className='hotelCard__Info'>
                    <h5 className='hotelCard__roomType'>{name}</h5>
                    <div className='hotelCard__advantage'>
                        <span >{adv1}</span>
                        <span >{adv2}<AiOutlineInfoCircle className='hotelCard__icon' /></span>
                        <span >{adv3}</span>
                    </div>
                    <div className='hotelCard__properties'>
                        <div className='hotelCard__property'>
                            {
                                property.map((data,index)=>(
                                    <p key={index}><AiOutlineCheckCircle className='hotelCard__icons' />{property[index]}</p>
                                ))
                            }
                            
                        </div>
                        <div className="hotelCard__price">
                            <p>₺{price}</p>
                            <p>₺{opportunityPrice}</p>
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