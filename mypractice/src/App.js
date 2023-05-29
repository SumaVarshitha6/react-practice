import logo from './logo.svg';
import './App.css';
import React from 'react';
import 

function App() {
    var [todos,setTodos]=React.useState(["promotions","react assignments","campaign",'ppts'])
    function deleteTodo(n){
      var temp = [...todos];
      temp.splice(n,1);
      setTodos([...temp])
    }
  return (
    <div className="App">
            <h2>Todolist</h2>
            {
              todos.map((todo,i)=>{
                return <Todo todo={todo} delTodo={deleteTodo} index={i}></Todo>
              })
            }
    </div>
  );
}

export default App;
