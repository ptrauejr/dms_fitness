import React from 'react'

const Friends = ({friends}) =>
    <div className="panel panel-default">
        <div className="panel-heading"><h4>Friends</h4></div>
        <div className="panel-body">
            {friends.map((friend, i) => {
                return(
                    <div key={i}>
                    </div>
                )
            })}
        </div>
    </div>

export default Friends
