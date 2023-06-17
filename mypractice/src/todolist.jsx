import React from 'react'
import {connect} from 'react-redux'
function Todolist(props) {
  return (
    <div>
      <h1>TodoList</h1>
      <input type='text' onKeyUp={(e)=>{props.dispatch({type:'UPDATENEWTODO',payload:e.target.value})}} />
      <button onClick={()=>{props.dispatch({type:'ADDTODO'})}}>Add Todo</button>
      <ul>
        {
          props.todolist && props.todolist.todos.map((t,i)=>{
            return (
              <li>
                {t}
                <button onClick={()=>{props.dispatch({type:})}}></button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Todolist