import React from 'react';
import Second from './second'
import { useContext } from 'react';
import { Usercontext } from './App';
function First(props){
    var u=useContext(Usercontext)
   
    return (
        <div className='border border-2 border-success p-1 m-1'>
            <h1>First Component : {u.no}</h1>
        <Second>
          
        </Second>
        </div>
    )
}
export default First;