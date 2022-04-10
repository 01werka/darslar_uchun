import { useReducer, useState } from "react"
 
import './test12.css'
import Nav from "./Nav"



function reducer(state, action) {
    switch (action.type) {
        case "setActive":
            return { ...state, active: !state.active }
        case "setCount":
            return { ...state, count: state.count + 1 }
        case "setCount2":
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}

export default function Test12() {

    const [state, dispatch] = useReducer(reducer, {
        active: false,
        count: 0,
    })
 
    function edit() {
        dispatch({ type: "setActive" })
    }
    function pluse() {
        dispatch({ type: "setCount" })
    }
    function minuse() {
        dispatch({ type: "setCount2" })
    }


    
    return (
        <div className="bosh">
            {/* {state.active === false ? "active is false" : "active is true"}
            <br/>
            <button onClick={edit} > edit </button>
            <br/>
            <button onClick={minuse}>-</button>
            {state.count}
            <button onClick={pluse}>+</button> */}
            <Nav/>
                <br />
            test12    bu bosh sahifa
        </div>
    )
}
 