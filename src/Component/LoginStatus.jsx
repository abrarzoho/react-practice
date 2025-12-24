import React, { useState } from 'react'
import "./LoginStatus.css"
function LoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    function handleLogin() {
          console.log(isLoggedIn)
        setIsLoggedIn(!isLoggedIn)
    }
    return (
        <div>
            <div className='login-status'>
                <p className='text'>
                    {isLoggedIn ? "welcome back" : "login to continue"}
                </p>
                <button className='login-btn' onClick={handleLogin} >
                    {isLoggedIn ? "logout" : "log in"}
                </button>
            </div>
        </div>
    )
}

export default LoginStatus
