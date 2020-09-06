import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'

import Button from '@components/button'
import Background from '@assets/images/header-background.jpg'

export default () => {
    return <div className="header">
        <div className="header__content">
            <img className="header__background" src={Background} alt="Лес"/>
            <div className="header__overlay" />

            <Link to ="/posts">
                <h2>Это название моего блога</h2>
            </Link>

            <p className="header__description">Это небольшое описание моего блога.</p>
            
            <Button type="info" to="/about">Обо мне</Button>
        </div>
    </div>
}