import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const Steps = ({steps}) =>
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

export default Steps
