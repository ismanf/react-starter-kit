import React from 'react'
import Jumbotron from '../common/Jumbotron'

const dummy = {
    jtitle='Home Component!',
    jtext='This is home page...'
}

const Home = () => {

    return (
        <div className='container'>
            <Jumbotron title={dummy.jtitle} text={dummy.jtext} />
        </div>
    )
}

export default Home