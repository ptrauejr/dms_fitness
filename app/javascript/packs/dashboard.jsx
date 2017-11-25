import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>React Fit</h1>
                <p>Your personal fitness dashboard</p>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Dashboard />,
        document.body.appendChild(document.createElement('div')),
    )
})