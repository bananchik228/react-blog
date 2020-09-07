import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Posts from './posts'
import About from '@components/about'

export default ({posts, addPost}) => {
    return (
        <div className="content">
            <Switch>
                <Route path="/posts">
                    <Posts posts={posts} addPost={addPost} />
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>

                <Redirect to="/posts" />
            </Switch>
        </div>
    )
}