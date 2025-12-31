import React from 'react'
import "./UserFrom.css"
function UserFrom() {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')

    function HandelChange(e) {
        if (e.target.name === 'name') {
            setName(e.target.value)
        } else {
            setEmail(e.target.value)
        }
    }

    function FromHandel(e) {
        e.preventDefault()
        console.log(name, email)
    }
    return (
        <div>
            <form action="" name='user' onSubmit={FromHandel}>
                <label htmlFor="name">Enter your Name:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="enter your name"
                    value={name}
                    onChange={HandelChange}
                /><br/>
                <label htmlFor="email">Enter your Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder="enter your email"
                    value={email}
                    onChange={HandelChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UserFrom
