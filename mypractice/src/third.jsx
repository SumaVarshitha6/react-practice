import React from 'react';
import { useContext } from 'react';
import { Usercontext } from './App';
function Third(props){
    function say(props){
        alert('hi')
    }

    var s=useContext(Usercontext)
    return (
        <div className='border border-2 border-primary p-1 m-1'>
            <h1>HI, {s.username} {s.lastname}</h1>
            <h1>Third Component : {s.no}</h1>
            <button onClick={say} className='rounded'>say HI</button>

        </div>
    )
}
export default Third;