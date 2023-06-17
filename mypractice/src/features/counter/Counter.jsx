import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {increment} from "./counterSlice";
import {decrement} from "./counterSlice";
import {reset} from "./counterSlice";

function Counter(){
    var {count}=useSelector(state=>state.counter)
    var dispatch=useDispatch();
            return (
        <div className="border border-2 border-success m-2 p-2">
            <h1>Counter:{count}</h1>
            <button onClick={()=>{dispatch(increment())}}>inc</button>
            <button onClick={()=>{dispatch(decrement())}}>dec</button>
            <button onClick={()=>{dispatch(reset())}}>reset</button>
        </div>
    )
}
export default Counter;