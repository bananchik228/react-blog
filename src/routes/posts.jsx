import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Posts from '@components/posts'
import PostAdd from '@components/post-add'

export default ({posts, addPost}) => {
     return (
        <Switch>
            <Route exact path="/posts">
                <Posts posts={posts} />
            </Route>

            <Route exact path="/posts/add">
                <PostAdd />
            </Route>

            <Route exact path="/posts/:number">
                Просмотр поста
            </Route>

            <Route exact path="/posts/:number/edit">
                Редактирование поста
            </Route>

            <Redirect to="/posts" />
        </Switch>
    )
}