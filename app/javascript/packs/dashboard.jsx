import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <header className="text-center">
                    <h1 className="page-header">React Fit</h1>
                    <p className="lead">Your personal fitness dashboard</p>
                </header>
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