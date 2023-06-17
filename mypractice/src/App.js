import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import Todolist from './todolist';
import store from './store';
function App() {
 
  return (
    <Provider store={store}>
    <div className="App border border-2 border-danger ">
         <h1>My App</h1>
         <Counter></Counter>
         <Todolist></Todolist>
    </div>
    </Provider>
  );
}

export default App;
