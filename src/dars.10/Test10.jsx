import {useRef} from 'react'

function Test10() {

    const inputRef = useRef()

    function btnClicked(){
        // console.log(inputRef.current.value)
        inputRef.current.focus()
    }
    return (
        <div> 
            <input disabled ref={inputRef} type="text" />
            <button onClick={btnClicked}>ok</button>
        </div>
    )
}

export default Test10

