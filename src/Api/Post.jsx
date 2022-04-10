import React, { useState } from 'react'
import axios from 'axios'

function Post() {
    const url = "https://6252c8527f7fa1b1dde9c2a2.mockapi.io/01werka/post/01WERKA"
    const [data, setData] = useState({
        name: "",
        surname: "",
        age: ""
    })
    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            name: data.name,
            surname: data.surname,
            age: parseInt(data.age)
        })
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder='name' type="text" />
                <input onChange={(e) => handle(e)} id="surname" value={data.surname} placeholder='surname' type="text" />
                <input onChange={(e) => handle(e)} id="age" value={data.age} placeholder='age' type="number" />
                <button>submit</button>
            </form>

        </div>
    )
}

export default Post
