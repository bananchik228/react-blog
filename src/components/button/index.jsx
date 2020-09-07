import React from 'react'
import { Link } from 'react-router-dom'

import './button.scss'

export default ({type, to, onClick, children}) => {
    type = type ? 'button button_type_' + type : 'button'

    return to ? (
        <Link to={to}>
            <button className={type} onClick={onClick}>{children}</button>
        </Link> 
    ) : (
        <button className={type} onClick={onClick}>{children}</button>
    )
}