import React from 'react'

import './UserDetails.css'
import onlineIcon from '../../icons/onlineIcon.png';


const UserDetails = ({ showUserDetails, users }) => {
    return (
        <div className={showUserDetails ? "show user-details" : "hide user-details"}>
            {
            users
                ? (
                <div className="users-container">
                    <h2>People currently Online</h2>
                    <div className="activeContainer">
                        {users.map(({name}) => (
                        <div key={name} className="activeItem">
                            <h3>
                                <img className="onlineIcon" src={onlineIcon} alt="online icon" />
                                {name}
                            </h3>
                        </div>
                        ))}
                    </div>
                </div>
                )
                : null
            }
        </div>
    )
}

export default UserDetails;