import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'

export default () => {
    return <div className="header">
        <div className="header__content">
            <Link to ="/posts">
                <h2>Это обычная шапка блога!</h2>
            </Link>

            <p>Это небольшое описание моего блога.</p>
            
            <Link to="/about">
                <button className="header__button">Обо мне</button>
            </Link>
        </div>
    </div>
}