import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => {
    const { children } = props

    return (
        <footer className='py-5 bg-dark'>
            {children}
        </footer>
    )
}

Footer.propTypes = {
    children: PropTypes.any
}

export default Footer