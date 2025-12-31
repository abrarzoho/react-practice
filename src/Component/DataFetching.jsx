import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './DataFetching.css'

function DataFetching() {
    const [post, setpost] = useState([])
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                setpost(res.data)
            })
            .catch(err =>
                console.log(err)
            )
    },[])
    return (
        <>
            <ul>
                {
                    post.map(post => (
                        <li className='post' key={post.id}>{post.name}</li>
                    ))
                }
            </ul>
        </>

    )
}

export default DataFetching
