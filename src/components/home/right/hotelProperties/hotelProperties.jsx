import './hotelProperties.scss';
import { AiOutlineCheck } from 'react-icons/ai';
function hotelProperties({header}) {
    return (
        <section className='hotelProperties'>
            <article className='hotelProperties__info'>
                <h5 className='hotelProperties__header'>{header}</h5>
                <ul className='hotelProperties__list'>
                    <div>
                        <li><AiOutlineCheck className='hotelProperties__icon' />Sauna</li>
                        <li><AiOutlineCheck className='hotelProperties__icon' />Bar</li>
                        <li><AiOutlineCheck className='hotelProperties__icon' />Spa Merkezi</li>
                        <li><AiOutlineCheck className='hotelProperties__icon' />TV Salonu</li>
                        <li><AiOutlineCheck className='hotelProperties__icon' />Havaalanı Servisi</li>
                    </div>
                    <div>
                        <li><AiOutlineCheck className='hotelProperties__icon' />Market</li>
                        <li><AiOutlineCheck className='hotelProperties__icon' />Masaj</li>
                        <li><AiOutlineCheck className='hotelProperties__icon' />Kapalı Restoran</li>
                        <li><AiOutlineCheck className='hotelProperties__icon' />Engelli Odaları</li>
                    </div>
                    <div>
                        <li><AiOutlineCheck className='hotelProperties__icon' />Hamam</li>
                        <li><AiOutlineCheck className='hotelProperties__icon' />Açık Restoran</li>
                        <li><AiOutlineCheck className='hotelProperties__icon' />Otelde Otopark</li>
                        <li><AiOutlineCheck className='hotelProperties__icon' />Araç Kiralama</li>
                    </div>

                </ul>
            </article>
        </section>

    )
}

export default hotelProperties;