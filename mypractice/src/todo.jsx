function Todo(props){
    return (
        <div className="border border-1 border-dark m-3 p-4">
        <li>
          {props.todo}
          <button onClick={()=>{props.delTodo(props.index)}}>Delete</button>
        </li>
      </div>
    )
}
export default Todo;