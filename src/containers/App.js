import React from 'react'
import {Nav, NavItem, NavContainer} from '../components/common/Nav'
import Home from '../components/Home'
import Service from '../components/Service'

const dummy = {
    navs: [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/services',
            title: 'Services'
        }
    ]
}

const App = () => {
    return (
        <div>
            <NavContainer>
                <Nav items={dummy.navs} />
            </NavContainer>
        </div>
    )
}

export default App