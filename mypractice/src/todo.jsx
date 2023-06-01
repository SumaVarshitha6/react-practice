import React from 'react';
function Comp(props){
    var [newtodo,setnewtodo]=React.useState('');
    var [todos,setTodos] = React.useState([
        {
          title:'clear bills',
          status:false
        },
        {
          title:'Moksha School',
          status:true
        },
        {
          title:'Manas Bus Fee',
          status:false
        },
        {
          title:'Gold Bill',
          status:false
        },
        {
          title:'Current Bill',
          status:true
        },
      ])
      function addTask(){
        var newtask = document.getElementById('task').value;
        setTodos([...todos],[{title:newtask,status:false}])
      }
      var done=React.useCallback(function(i){
        var temp = [...todos];
        temp[i].status=!temp[i].status;
        setTodos([...temp])
      },[])
    return (
        <div className='border border-2  m-1 p-1'>
          <h1>Todolist</h1>
                <div>
                <input type="text" id='task' />
                    <button onClick={addTask}>Add Task</button>
                    {
                        todos.map((todo,i)=>{
                        return <div>
                            <li className={todo.status?'bg-success m-2 p-2':'bg-danger m-2 p-2'}>
                        {todo.title}
                        <button onClick={()=>{done(i)}}>Done</button>
                        <button onClick={()=>{}}>Undo</button>
                        </li>
                        </div>
                        })
                    }
                </div>      
        </div>
    )
}
export default Comp;

 