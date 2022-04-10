import React from 'react'
import { Link } from 'react-router-dom'
import './test12.css'

export default function Nav() {
  return (
    <div className='navbar'>
     
        <Link className="links1" to={"/"}> bosh sahifa </Link>
        <Link className="links" to={"birinchi"}> Users </Link>
        <Link className="links" to={"ikkinchi"}> Todos </Link>
        <Link className="links" to={"uchinchi"}> Comments </Link>

    </div>
  )
}
