import React from 'react'

import PostItem from './__item'

import './posts.scss'

export default ({posts}) => {
    return (
        <div className="posts">
            {posts.map(post => (
                <PostItem post={post} key={post.title} />
            ))}
        </div>
    )
}