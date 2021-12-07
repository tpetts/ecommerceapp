/**
 * The Router component configures 3 main components and routes: Main, Admin, and Profile.
 * 
 * In the useEffect Hook, we first call the setRoute function that will get the current window location and set the current rout information to be passed down to the Nav component...
 */

import React, {useState, useEffect} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Admin from './Admin';
import Main from './Main';
import Profile from './Profile';

const Router = () => {
    const [current, setCurrent] = useState('home')
    useEffect(() => {
        setRoute()
        window.addEventListener('hashchange', setRoute)
    }, [])

    const setRoute = () => {
        const location = window.location.href.split('/')
        const pathname = location[location.length-1]
        console.log('pathname: ', pathname)
        setCurrent(pathname ? pathname : 'home')
    }

    return (
        <HashRouter>
            <Nav current={current} />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/admin' component={Admin} />
                <Route path='/profile' component={Profile} />
                <Route component={Main} />
            </Switch>
        </HashRouter>
    )
}