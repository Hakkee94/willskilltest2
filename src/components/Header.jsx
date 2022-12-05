import React from 'react';
import './HeaderStyle.css'
import logo from '../assets/nootris-logo.png'
import basket from '../assets/basket.png'

const Header = () => {
    return (
        <header>
            <div className='header-container'>
                <div className='header-logo'>
                    <img src={logo}/>
                </div>

                <div className='header-links'>
                    <a>FAQ</a>
                    <a>Оплата и доставка</a>
                    <a>Возврат</a>
                    <a>Исследования</a>
                    <a>Личный кабинет</a>
                    <a>8 8 (800) 600-09-90</a>
                </div>

                <div className='basket-logo'>
                    <img src={basket}/>
                </div>
            </div>
        </header>
    );
};

export default Header;