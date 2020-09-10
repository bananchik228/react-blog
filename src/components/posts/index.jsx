import React from 'react'

import PostItem from './__item'

import Button from '@components/button'

import './posts.scss'

export default ({posts}) => {
    return (
        <div className="posts">

            <Button type="info" to="/posts/add">Новый пост</Button>

            {posts.map(post => (
                <PostItem post={post} key={post.title} />
            ))}
        </div>
    )
}