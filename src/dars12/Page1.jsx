import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

export default function Page1() {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    const a = axios({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: "get"
    })


    a.then((resoult) => {
    let b = [...userData ];
    b = resoult.data
    setUserData(b)
    })


  }, [])
  console.log(userData);
  return (
    <div>
      <Nav />

      {
         userData.map((item,index)=> <div>
            <div className='row bg-danger'>
              <div className='col-4 bg-info m-2'>
             { index+1  } my name is { item.name } <br/>  my addres: {item.address.city}
                
              </div>
            </div>

         </div> )
       }
    </div>
  )
}
