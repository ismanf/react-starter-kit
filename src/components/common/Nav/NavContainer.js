import React from 'react'
import PropTypes from 'prop-types'

const NavContainer = (props) => {
    const { children } = props

    return (
        <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
            <div className='collapse navbar-collapse'>
                { children }
            </div>
        </nav>
    )
}

NavContainer.propTypes = {
    children: PropTypes.any
}

export default NavContainer