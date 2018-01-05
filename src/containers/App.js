import React from 'react'
import {Route} from 'react-router-dom'
import { Nav, NavItem, NavContainer } from '../components/common/Nav'
import Footer from '../components/common/Footer'
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
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Service} />
            <Footer>
                <div className='container'>
                    <p className='m-0 text-center text-white'>Copyright &copy; Ismayil Malik 2018</p>
                </div>
            </Footer>
        </div>
    )
}

export default App