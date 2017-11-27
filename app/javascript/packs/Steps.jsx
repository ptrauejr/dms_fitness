import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const Steps = ({steps}) =>
    <div className="panel panel-default">
        <div className="panel-heading">Steps</div>
        <div className="panel-body">
            <BarChart width={600} height={600} data={steps["activities-steps"]}
                      margin={{top: 5, right: 30, left:20, bottom: 5}}>
                <XAxis dataKey="dateTime"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </div>
    </div>

export default Steps
