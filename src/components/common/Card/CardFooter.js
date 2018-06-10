import React from 'react'
import PropTypes from 'prop-types'

const CardFooter = (props) => {
    const { children } = props

    return (
        <div className='card-footer'>
            {children}
        </div>
    )
}

CardFooter.propTypes = {
    children: PropTypes.any
}

export default CardFooter