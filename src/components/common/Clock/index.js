import React, {Component} from 'react'

class Clock extends Component {

    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }

        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className={this.props.className}>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock