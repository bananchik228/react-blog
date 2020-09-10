import React from 'react'

import './message.scss'

export default ({type, children}) => {
    type = type ? 'message message_type_' + type : 'message'

    return (
        <div className={type}>
            {children}
        </div>
    )
}