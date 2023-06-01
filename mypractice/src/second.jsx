import React from 'react';
import Third from './third';
import { useContext } from 'react';
import { Usercontext } from './App';

function Second(props){
    var s=useContext(Usercontext)
    return (
        <div className='border border-2 border-info p-1 m-1'>
            <h1>How are you, {s.username}</h1>
          <h1>Second Component : {s.no}</h1>
          <Third></Third>
        </div>
    )
}
export default Second;