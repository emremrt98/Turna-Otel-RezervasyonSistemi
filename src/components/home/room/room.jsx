import Carousel from '../right/carousel/carousel';
import Room1 from '../../../assets/rooms/small room/Rectangle1.png';
import Room2 from '../../../assets/rooms/small room/Rectangle2.png';
import Room3 from '../../../assets/rooms/small room/Rectangle3.png';
import './room.scss';
import { AiOutlineInfoCircle, AiOutlineCheck, AiFillCloseCircle } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa'
function room({ show, setShow }) {
    return (
        <section className='room container-fluid'>

            <article className='room__general'>

                <div className='room__gnr'>
                    <AiFillCloseCircle onClick={() => setShow(!show)} className='room__exit' />
                    < Carousel img1={Room1} img2={Room2} img3={Room3} />
                    <div className='room__information'>
                        <h4 className='room__header'>Standart Oda</h4>
                        <p className='room__header room__header--info'>The purpose of lorem ipsum is to create a natural looking
                            block of text (sentence, paragraph, page, etc.) that doesn't
                            distract from the layout. A practice not without controversy,
                            laying out pages with meaningless filler text can be.
                        </p>
                        <div className='room__advantage'>
                            <span>Erken Rezervasyon İndirimi</span>
                            <span>Her Şey Dahil </span>
                            <span>Ücretsiz İptal <AiOutlineInfoCircle className='room__icon' /></span>
                        </div>
                        <div className='room__property'>
                            <div>
                                <p><AiOutlineCheck />Sauna</p>
                                <p><AiOutlineCheck />Bar</p>
                                <p><AiOutlineCheck />Spa Merkezi</p>
                                <p><AiOutlineCheck />TV Salonu</p>
                                <p><AiOutlineCheck />Havaalanı Servisi</p>
                            </div>
                            <div>
                                <p><AiOutlineCheck />Market</p>
                                <p><AiOutlineCheck />Masaj</p>
                                <p><AiOutlineCheck />Kapalı Restoran</p>
                                <p><AiOutlineCheck />Engelli Odaları</p>
                            </div>
                            <div>
                                <p><AiOutlineCheck />Hamam</p>
                                <p><AiOutlineCheck />Açık Restoran</p>
                                <p><AiOutlineCheck />Otopark</p>
                                <p><AiOutlineCheck />Araç Kiralama</p>
                            </div>
                        </div>
                        <hr />
                        <article className='room__book'>
                            <div className='room__price'>
                                <p>₺1.200</p>
                                <p>2 gece için toplam tutardır.</p>
                            </div>
                            <div className='room__bookBtn'>
                                <button type='button'>Odayı Ayır <FaArrowRight className='room__btnIcon' /></button>
                            </div>
                        </article>
                    </div>
                </div>


            </article>

        </section>
    )
}

export default room;