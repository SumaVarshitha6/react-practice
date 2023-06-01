import React from 'react';
import { useContext } from 'react';
import { Usercontext } from './App';
function Fourth(props){
    var s=useContext(Usercontext)
    return (
        <div className='border border-2 border-secondary p-1 m-1'>
            <h1>Fourth</h1>
            <h1>{s.username}</h1>
        </div>
        
    )
}
export default Fourth;
