import React, { useState, useReducer } from 'react'


function Reduser() {
    // const [state, setState] = useState(0)
    const reducer=(state,action)=>{
        switch(action.type){
            case "dekrement": return state-1;
            case "inkrement": return state+1;
            default: return state;

        }
    }
    const [count, dispatch] = useReducer(reducer,0)

    // const dekrement = () => {
    //     setState(state - 1)
    // }
    // const inkrement = () => {
    //     setState(state + 1)
    // }
    return (
        <div>
            <button onClick={()=> dispatch({type:'dekrement'})}>-</button>
            <span> {count} </span>
            <button onClick={()=> dispatch({type:'inkrement'})}>+</button>

        </div>
    )
}

export default Reduser
