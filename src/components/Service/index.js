import React from 'react'
import { Card, CardBody, CardFooter } from '../common/Card'
import Jumbotron from '../common/Jumbotron'

const dummy = {
    cards: [{
        title: 'Service one!',
        text: 'This is the best service ever...'
    }],
    jumbo: {
        title: 'Service page!',
        text: 'Look at this beautifull services...'
    }
}

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
                        <button className='btn btn-primary'>Find Out More!</button>
                    </CardFooter>
                </Card>
            </div>
        )
    }

    return (
        <div className='container'>
            <Jumbotron title={dummy.jumbo.title} text={dummy.jumbo.text} />
            <div className='row text-center'>
                {
                    dummy.cards.map((e, i) => renderCard(e, i))
                }
            </div>
        </div>
    )
}

export default Service