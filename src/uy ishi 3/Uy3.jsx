import { width } from '@mui/system';
import React,{useReducer, useState} from 'react'

function reducer(state,action){
    switch(action.type){
        case "setCounter":
            return {...state, counter: state.counter+1}
        case "setCount":
            return {...state, data: state.data  }
        default:
            return state;
    }


}

function Add() {

    function plus(){
        dispatch({type:"setCounter"})
        dispatch({type:"setCount"})
        
    }

    // function plyus(){
    //     dispatch({type:"setData"})
    // }
    const [state, dispatch] = useReducer(reducer,{
        counter: 0
    })
    const [data,setData] = useState([0])
    function addd(){
        let a = [...data]
        a.push(0)
        setData(a)
        console.log(data);
    }
    return (
        <div>
            ADD Counter: {state.counter}
           
            <button onClick={addd}>ADD</button>
            {data.map((item, index)=>
            <div>
                
                {index+1} Count: {item}
                
            
            </div>
            )}
        </div>
        
    )
}

export default Add