import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Test15() {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        const a = axios({
            url: "https://jsonplaceholder.typicode.com/users",
            method: "get"
        })

        a.then((resoult) => {
            console.log(resoult.data);
            let b = [...userData];
            b = resoult.data
            setUserData(b)
        })

    }, [])
    console.log(userData)

    return (
        <div>
            {
                userData.map((item, index) => <div>
                    {index+1} {item.name} <br/>
                    my adres: {item[index].address.city}

                </div>)
            }
        </div>
    )
}

export default Test15
