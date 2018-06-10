import React from 'react'
import Jumbotron from '../common/Jumbotron'
import Clock from '../common/Clock'

const dummy = {
    jtitle: 'Home Component!',
    jtext: 'Look my beautifull clocks...'
}

const Home = () => {

    return (
        <div className='container'>
            <Jumbotron title={dummy.jtitle} text={dummy.jtext} />
            <Clock className={'success-timer-container'} />
            <Clock className={'error-timer-container'} />
        </div>
    )
}

export default Home