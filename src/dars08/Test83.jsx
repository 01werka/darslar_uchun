import React, { useContext, useEffect, useState } from 'react'
import { ozimizniContext } from './Test80'

export default function Test83() {

    const bunewProps = useContext(ozimizniContext)
    const [secund, setSecund] = useState(1)
    const [minut, setMinut] = useState(0)
    const [secund2, setSecund2] = useState('')
    const [ aa,setaa] = useState('')
    function pluse() {
        setSecund(p => p + 1)
    }
    function minuse() {
        setSecund(p => p - 1)
    }

    useEffect(()=>{
        console.log(secund)
        if(secund === 0 && minut === 0  ){
            clearInterval(secund2)
            setMinut(0)
            setSecund(0)
        }

        if( minut !==0 && secund === 0){
            setMinut(p=>p-1)
            setSecund(59)
        }
    })


    function start() {
        
        let a = setInterval(() => {
            setSecund(p => p - 1)
        }, 500);
        setSecund2(a)
    }
 
  

    return (
        <div>

            <button onClick={() => setMinut(p => p + 1)}>+</button>
            <button onClick={pluse}>+</button><br />
            {minut}  :   {secund} <br />
            <button onClick={() => setMinut(p => p - 1)}>-</button>
            <button onClick={minuse}>-</button><br />
            <button onClick={start}>start</button>
            <br />
            <br />
            <br />
            <button onClick={() => bunewProps.yangisetOpen(true)} > bosma</button>
        </div>
    )
}