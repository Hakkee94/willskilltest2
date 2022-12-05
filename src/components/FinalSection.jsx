import React from 'react';
import './FinalSectionStyle.css'
import ginger from '../assets/ginger.png'
import bottleHorisontal from '../assets/bottle-horisontal.png'
import virus from '../assets/virus.png'

const FinalSection = () => {
    return (
        <div className='final-section'>
            <div className='final-section-container'>
                <div className='final-section-title'>
                    <h1>получи защиту иммунитета<span><br/>со скидкой -15% первым!</span></h1>
                </div>

                <div className='prices'>
                    <div className='before'>
                        <h2>750₽</h2>
                    </div>

                    <div className='now'>
                        <h2>690₽</h2>
                    </div>
                </div>

                <div className='final-section-images-block'>
                    <div className='final-section-pictures-block'>
                        <div className='final-section-ginger'>
                            <div className='ginger-img'>
                                <img src={ginger}/>
                            </div>

                            <div className='ginger-text'>
                                <h3>Содержит <br/> <span>имбирь</span></h3>
                            </div>
                        </div>

                        <div className='final-section-bottle'>
                            <div className='bottle-img'>
                                <img src={bottleHorisontal}/>
                            </div>

                            <div className='bottle-text'>
                                <h2>+ Бесплатная доставка</h2>
                                <h3>Специальная цена</h3>
                            </div>
                        </div>

                        <div className='final-section-virus'>
                            <div className='virus-img'>
                                <img src={virus}/>
                            </div>

                            <div className='virus-text'>
                                <h3>Нейтрализует <br/><span>вирусы</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className='order-btn'>
                        <button>Оформить заказ</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FinalSection;