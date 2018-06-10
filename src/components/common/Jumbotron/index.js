import React from 'react'
import PropTypes from 'prop-types'

const Jumbotron = (props) => {
    const { text, title } = props

    return (
        <header className='jumbotron my-4'>
            <h1 className='display-3'>{title}</h1>
            <p className='lead'>{text}</p>
        </header>
    )
}

Jumbotron.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Jumbotron