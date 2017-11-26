import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import LifetimeStats from './LifetimeStats'
import Badges from './Badges'
import Steps from './Steps'
import dummyData from './dummyData'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = dummyData
    }

    fetchFitbitData(url, fitbitToken, stateKey) {
        axios({
            method: 'get',
            url: url,
            headers: { 'Authorization': 'Bearer ' + fitbitToken },
            mode: 'cors',
        }).then(response => {
            this.setState({[stateKey]: response.data})
            console.log(response.data)
        }).catch(error => console.log(error))
    }

    componentDidMount() {
        if(window.location.hash) {
            let fitbitToken = window.location.hash.slice(1).split("&")[0].replace("access_token=", "")
            console.log(fitbitToken)

            this.setState({loggedIn: true})

            this.fetchFitbitData('https://api.fitbit.com/1/user/-/profile.json', fitbitToken, 'user')
            this.fetchFitbitData('https://api.fitbit.com/1/user/-/activities.json', fitbitToken, 'lifetimeStats')
            this.fetchFitbitData('https://api.fitbit.com/1/user/-/badges.json', fitbitToken, 'badges')
            this.fetchFitbitData('https://api.fitbit.com/1/user/-/activities/steps/date/today/1m.json',
                fitbitToken, 'steps')

        }
    }

    render() {
        return (
            <div>
                <div className="container">
                <header className="text-center">
                    <span className="pull-right">{this.state.user.user.displayName}</span>
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
                        <LifetimeStats lifetimeStats={this.state.lifetimeStats} />
                        <Badges badges={this.state.badges.badges} />
                    </div>

                    <div className="col-lg-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">Steps</div>
                            <div className="panel-body">
                                <BarChart width={600} height={600} data={data}
                                        margin={{top: 5, right: 30, left:20, bottom: 5}}>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <CartisianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>
                                    <Bar dataKey="pv" fill="#8884d8" />
                                    <Bar dataKey="uv" fill="#82ca9d" />
                                </BarChart>
                            </div>
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