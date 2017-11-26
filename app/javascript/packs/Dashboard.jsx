import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import LifetimeStats from './LifetimeStats'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            loggedIn: false,
            lifetimeBest: {steps: "", distance: ""},
            lifetimeTotals: {steps: "", distance: ""},
        }
    }

    fetchFitbitData(url, fitbitToken, stateKey, dataKey) {
        axios({
            method: 'get',
            url: url,
            headers: { 'Authorization': 'Bearer ' + fitbitToken },
            mode: 'cors',
        }).then(response => {
            console.log(response)
            this.setState({[stateKey]: response.data[dataKey]})
        }).catch(error => console.log(error))
    }

    componentDidMount() {
        if(window.location.hash) {
            let fitbitToken = window.location.hash.slice(1).split("&")[0].replace("access_token=", "")
            console.log(fitbitToken)

            this.setState({loggedIn: true})

            this.fetchFitbitData('https://api.fitbit.com/1/user/-/profile.json', fitbitToken, 'user', 'user')

            axios({
                method: 'get',
                url: 'https://api.fitbit.com/1/user/-/activities.json',
                headers: { 'Authorization': 'Bearer ' + fitbitToken },
                mode: 'cors',
            }).then(response => {
                console.log(response)
                this.setState({lifetimeBest: response.data.best.total, lifetimeTotals: response.data.lifetime.total})
            }).catch(error => console.log(error))

        }
    }

    render() {
        return (
            <div>
                <div className="container">
                <header className="text-center">
                    <span className="pull-right">{this.state.user.displayName}</span>
                    <h1 className="page-header">React Fit</h1>
                    <p className="lead">Your personal fitness dashboard</p>
                </header>
                </div>

                {!this.state.loggedIn &&
                    <div className="row text-center">
                        <a href="https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22CGCB&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800">
                            Log in with fitbit
                        </a>
                    </div>
                }

                <div className="row">
                    <div className="col-lg-3">

                        <LifetimeStats lifetimeTotals={this.state.lifetimeTotals} lifetimeBest={this.state.lifetimeBest} />
                        <div className="panel panel-default">
                            <div className="panel-heading"><h4>Badges</h4></div>
                            <div className="panel-body">

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">Steps</div>
                        </div>

                        <div className="panel panel-default">
                            <div className="panel-heading">Distance (miles)</div>
                        </div>


                    </div>

                    <div className="col-lg-2 col-lg-offset-1">
                        <div className="panel panel-default">
                            <div className="panel-heading">Your Friends</div>
                        </div>
                    </div>
                </div>
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