import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem'

const Nav = (props) => {
    const { items } = props

    return (
        <ul className='navbar-nav mr-auto'>
            {
                items.map((e, i) => <NavItem key={i} path={e.path} title={e.title} />)
            }
        </ul>
    )
}

Nav.propTypes = {
    items: PropTypes.array.isRequired
}

export default Nav