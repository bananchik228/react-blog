import React from 'react'
import { useParams } from 'react-router-dom'

export default ({posts}) => {
    const { id } = useParams()
    const post = posts.find(post => post.id === +id)

    return (
        <div className="posts__item">
            <h2 className="posts__title">{post.title}</h2>
            <i>Категория: {post.category}</i>
            <p>{post.description}</p>
            <i>{post.date.toLocaleString()}</i>
        </div>
    )
}