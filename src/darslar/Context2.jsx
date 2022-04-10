import React, {useContext} from 'react'
import {context} from './Context'

function Context2() {
    const Personname=useContext(context)
    return (
        <div>
            <h1>{Personname}</h1>
        </div>
    )
}

export default Context2
