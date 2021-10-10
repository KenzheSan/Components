import './index.css'
import React, { useState } from 'react'

function Counter() {
    const[num,setNumber] = useState(0)
    function plusNumber(){
        setNumber(num+1)
    }
    function minusNumber(){
        setNumber(num-1)
    }
    return (
        <div className='wrapper'>
            <h1>HomeWork</h1>
            <div className = 'blog'>
                <button onClick = {minusNumber} readOnly>minus</button>
                <span>{num}</span>
                <button onClick = {plusNumber}>plus</button>
            </div>
        </div>
    )
}
export default Counter