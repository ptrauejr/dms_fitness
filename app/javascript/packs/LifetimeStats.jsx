import React from 'react'

const LifetimeStats = ({lifetimeTotals, lifetimeBest}) =>
    <div className="panel panel-default">
        <div className="panel-heading"><h4>Lifetime Stats</h4></div>
            <div className="panel-body">
                <h4>Distance</h4>
                <p>Total: {lifetimeTotals.distance} miles</p>
                <p>Best: {lifetimeBest.distance.value} on {lifetimeBest.steps.date}</p>
                <h4>Steps</h4>
                <p>Total: {lifetimeTotals.steps}</p>
                <p>Best: {lifetimeBest.steps.value} on {lifetimeBest.steps.date}</p>
            </div>
    </div>

export default LifetimeStats
