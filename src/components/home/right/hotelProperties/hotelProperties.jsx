import './hotelProperties.scss';
import { AiOutlineCheck } from 'react-icons/ai';
function hotelProperties({ hotelPropertiesInfo: { header, col1, col2, col3 } }) {
    return (
        <section className='hotelProperties'>
            <article className='hotelProperties__info'>
                <h5 className='hotelProperties__header'>{header}</h5>
                <ul className='hotelProperties__list'>
                    <div>
                        {
                            col1.map((data, index) => (
                                <li key={index}><AiOutlineCheck className='hotelProperties__icon' />{data}</li>
                            ))
                        }
                    </div>
                    <div>
                        {
                            col2.map((data, index) => (
                                <li key={index}><AiOutlineCheck className='hotelProperties__icon' />{data}</li>
                            ))
                        }
                    </div>
                    <div>
                        {
                            col3.map((data, index) => (
                                <li key={index}><AiOutlineCheck className='hotelProperties__icon' />{data}</li>
                            ))
                        }
                    </div>

                </ul>
            </article>
        </section>

    )
}

export default hotelProperties;