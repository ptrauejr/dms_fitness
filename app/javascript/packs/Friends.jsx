import React from 'react'

const Friends = ({friends}) =>
    <div className="panel panel-default">
        <div className="panel-heading"><h4>Friends</h4></div>
        <ul className="panel-body list-group">
            {friends.map((friend, i) => {
                return(
                    <li key={i} className="list-group-item">
                        <span className="badge">{friend.average.steps}</span>
                        <img src={friend.user.avatar} />
                        <h5>{friend.user.displayName}</h5>
                    </li>
                )
            })}
        </ul>
    </div>

export default Friends
