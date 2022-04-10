import React, { useState, useEffect } from 'react'

function Effect() {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title = `siz ${count} marta bosdingiz`;
    },[])
        return (
            <div>
                <p>Siz {count} marta bosdinggiz</p>
                <button onClick={()=>setCount(count+1)}>click</button>
            </div>
        )
}

export default Effect
