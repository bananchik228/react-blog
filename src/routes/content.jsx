import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Posts from '@components/posts'
import About from '@components/about'

export default () => {
    return (
        <div className="content">
            <Switch>
                <Route exact path="/posts">
                    <Posts />
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>

                <Redirect to="/posts" />
            </Switch>
        </div>
    )
}