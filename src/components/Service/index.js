import React from 'react'
import {Card,CardBody,CardFooter} from '../common/Card'

const dummy = [{
    jtitle='Home Component!',
    jtext='This is home page...'
}]

const Service = () => {

    const renderCard = (card, key) => {
        return (
            <div key={key} className='col-lg-3 col-md-6 mb-4'>
                <Card>
                    <CardBody>
                        <h4 className='card-title'>{card.title}</h4>
                        <p className='card-text'>{card.text}</p>
                    </CardBody>
                    <CardFooter>
                        <a href="#" className='btn btn-primary'>Find Out More!</a>
                    </CardFooter>
                </Card>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='row text-center'>
                {
                    dummy.map((e, i) => renderCard(e, i))
                }
            </div>
        </div>
    )
}

export default Service