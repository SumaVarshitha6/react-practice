function Todo(props){
    return (
        <div className="mybox">
        <li>
          {props.todo}
          <button onClick={()=>{props.delTodo(props.index)}}>Delete</button>
        </li>
      </div>
    )
}
export default Todo;