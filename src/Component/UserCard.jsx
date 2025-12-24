import React from 'react'
import "./UserCard.css"
function UserCard({ name, email }) {
    return (
        <div className='card'>
            <div className="inner-card">
                <h1>Your name is :{name}</h1>
                <p>Your email is :{email}</p>
            </div>
        </div>

    )
}

export default UserCard
