import React from 'react'
import { useState } from 'react'
function State() {

    const [state, setState] = useState(0)
    function Test(){
        setState(p=>p+1)
    }
    function Test2(){
        setState(p=>p-1)
    }

    return (
        <div>
            <button onClick={Test2}>-</button>
            {state} 
            <button onClick={Test}>+</button>

        </div>
    )
}

export default State
