import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {deleteTodo} from "./todoSlice";

function Todolist(){
    const {todos}=useSelector(state=>state.todolist)
    var dispatch=useDispatch()
    return (
        <div className="border border-2 border-success m-2 p-2">
            <h1>Todolist</h1>
            {
                todos && todos.map((t,i)=>{
                    return <li>
                               {t}
                               <button onClick={()=>{dispatch(deleteTodo(i))}}>Delete</button>
                           </li>
                })
            }
        </div>
    )
}
export default Todolist;