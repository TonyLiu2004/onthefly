import React from 'react'
import './Avatar.css'

const Avatar = (props) =>  {
    return (
        <div className='Avatar'>
            <img className='user-img' alt='profile' src={props.user.avatarurl} />
        </div>
    )
}

export default Avatar