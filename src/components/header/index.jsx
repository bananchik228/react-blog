import React from 'react'

import './header.scss'

export default () => {
    return <div className="header">
        <div className="header__content">
            <h2>Это обычная шапка блога!</h2>
            <p>Это небольшое описание моего блога.</p>
            <button className="header__button">Обо мне</button>
        </div>
    </div>
}