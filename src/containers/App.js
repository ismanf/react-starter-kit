import React from 'react'
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
            <Footer>
                <div className='container'>
                    <p class='m-0 text-center text-white'>Copyright &copy; Ismayil Malik 2018</p>
                </div>
            </Footer>
        </div>
    )
}

export default App