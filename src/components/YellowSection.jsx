import React from 'react';
import './YellowSectionStyle.css'
import lemon from '../assets/lemon.png'
import nootrisBottle from '../assets/nootris-bottle.png'
import ginger from '../assets/ginger.png'
import pictures from '../assets/pictures.svg'

const YellowSection = () => {
    return (
        <section>
            <div className='yellow-section-container'>
                <div className='yellow-section-content'>

                    <div className='yellow-text'>
                        <div className='yellow-main-text'>
                            <h1>активируй<br/>иммунитет!</h1>
                            <h2>Всего пять секунд в день помогут укрепить иммунитет <br/>
                                и повысить защитные силы организма</h2>
                        </div>

                        <div className='yellow-additional-text'>
                            <h2>nootris помогает</h2>
                            <h3>Вашему организму во время пандемии <br/>
                                и сезонных простуд</h3>
                        </div>
                    </div>

                    <div className='yellow-pictures'>
                        <img src={pictures}/>
                        {/*<div className='lemon'>*/}
                        {/*    <img src={lemon}/>*/}
                        {/*</div>*/}
                        {/*<div className='bottle'>*/}
                        {/*    <img src={nootrisBottle}/>*/}
                        {/*</div>*/}
                        {/*<div className='ginger'>*/}
                        {/*    <img src={ginger}/>*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default YellowSection;

