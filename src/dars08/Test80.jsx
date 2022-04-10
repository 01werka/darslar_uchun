import React, { createContext, useState } from 'react'
import Test82 from './Test82'
export const ozimizniContext = createContext()

function Test08() {
    const [open, setOpen] = useState(false)

    return (
        <ozimizniContext.Provider value={{ setOpen: setOpen }}>
            <div>
                <button onClick={() => setOpen(true)} >open timer</button>
                {
                    open ? <Test82 /> : null
                }
            </div>
        </ozimizniContext.Provider>
    )
}

export default Test08