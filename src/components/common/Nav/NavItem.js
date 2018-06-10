import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavItem = (props) => {
    const {path, title} = props

    return (
        <li className='nav-item'>
            <Link className='nav-link' to={path}>{title}</Link>
        </li>
    )
}

NavItem.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default NavItem