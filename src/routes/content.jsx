import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export default () => {
    return (
        <div className="content">
            <Switch>
                <Route exact path="/posts">
                    Здесь будут посты блога
                </Route>

                <Route exact path="/about">
                    Здесь всё обо мне и о моём блоге
                </Route>

                <Redirect to="/posts" />
            </Switch>
        </div>
    )
}