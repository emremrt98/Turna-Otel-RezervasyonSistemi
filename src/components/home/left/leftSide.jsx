import React from 'react'
import "./left.scss"
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';

function LeftSide() {
    const [state, setState] = useState(false);
    useEffect(() => {
        console.log(state);


    }, [state])

    return (
        <section className='LeftSide'>

            <button onBlur={() => setState(!state)} onClick={() => setState(!state)} className='leftSide__mapIcon'><FaMapMarkerAlt /></button>
            <article className={state ? 'leftSide__transportation leftSide__transportation2' : 'leftSide__transportation'}>
                <h6 className='leftSide__header'>Otele Ulaşım</h6>
                <article className='leftSide__article'>
                    <p className='leftSide__address'>Antalya Şehir Merkezi, Sakıp Sabancı Bulvarı, Çimen Sokak, Antalya, Turkey, 07050</p>
                    <iframe className='leftSide__map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.1477732720914!2d30.670347515574726!3d36.88681297051849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c390340cb47fb9%3A0x272477432af34686!2sMeltem%2C%20Sak%C4%B1p%20Sabanc%C4%B1%20Blv.%2C%2007030%20Muratpa%C5%9Fa%2FAntalya!5e0!3m2!1str!2str!4v1661804317194!5m2!1str!2str" width="400" height="300" style={{ border: "none" }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe>
                    <button className='leftSide__btn' type='button'>Haritada Göster</button>
                </article>
            </article>


        </section >


    )
}

export default LeftSide;