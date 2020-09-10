import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Posts from '@components/posts'
import Post from '@components/post'
import PostAdd from '@components/post-add'

export default ({posts, addPost}) => {
     return (
        <Switch>
            <Route exact path="/posts">
                <Posts posts={[...posts].reverse()} />
            </Route>

            <Route exact path="/posts/add">
                <PostAdd addPost={addPost} />
            </Route>

            <Route exact path="/posts/:id">
                <Post posts={posts} />
            </Route>

            <Route exact path="/posts/:number/edit">
                Редактирование поста
            </Route>

            <Redirect to="/posts" />
        </Switch>
    )
}