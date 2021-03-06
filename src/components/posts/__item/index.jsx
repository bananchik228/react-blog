import React from 'react'
import { Link } from 'react-router-dom'

import './posts__item.scss'

export default ({post}) => {
    return (
        <div className="posts__item">
            <Link to={`/posts/${post.id}`}>
                <h2 className="posts__title">{post.title}</h2>
            </Link>
            <i>Категория: {post.category}</i>
            <p>{post.description}</p>
            <i>{post.date.toLocaleString()}</i>
        </div>
    )
}