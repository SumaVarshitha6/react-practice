import React from 'react';
import {connect} from 'react-redux';

function Counter(props) {
  return (
    <div className='border border-2 border-danger m-2 p-2'>
        <h1>count : {props.counter.count} </h1>
        <button onClick={()=>props.dispatcher({type:'INCREMENT'})}>INC</button>
        <button onClick={()=>props.dispatcher({type:'DECREMENT'})}>DEC</button>
    </div>
  )
}

export default connect(function(store){return store})(Counter);