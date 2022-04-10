import React, { useRef } from 'react'

function Ref() {
    const [ref,setRef] = useState("")
    const refvalue = useState("")

    function inputvalue(){
        setRef(p=>p+refvalue.current.value)
    }
    function inputfocus(){
        refvalue.current.focus()
    }
    return (
        <div>
             useRef : {ref}<br/><br />
            <input type="text" ref={refvalue}/><br /><br />
            <button onClick={inputvalue}>save value</button><br />
            <button onClick={inputfocus}>focus input</button>
        </div>
    )
}

export default Ref
