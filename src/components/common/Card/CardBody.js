import React from 'react'
import PropTypes from 'prop-types'

const CardBody = (props) => {
    const { children } = props

    return (
        <div className='card-body'>
            {children}
        </div>
    )
}

CardBody.propTypes = {
    children: PropTypes.any
}

export default CardBody