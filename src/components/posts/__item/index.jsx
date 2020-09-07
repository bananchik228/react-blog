import React from 'react'

import './posts__item.scss'

export default ({post}) => {
    return (
        <div className="posts__item">
            <h2 className="posts__title">{post.title}</h2>
            <p>{post.description}</p>
            <i>{post.date.toLocaleString()}</i>
        </div>
    )
}