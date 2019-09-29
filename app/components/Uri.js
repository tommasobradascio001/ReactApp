import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Center from '../pages/Center'
import Officer from '../pages/Officer'
import Four from '../pages/Four'
class Uri extends Component{
    render() {
        return (
            <section className="container">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/center' component={Center} />
                    <Route exact path='/officer' component={Officer} />
                    <Route exact path='/four' component={Four} />
                </Switch>
            </section>
        )
    }
}

export default Uri