import React from "react";
import Counter from "./features/counter/Counter";
import {Provider} from "react-redux";
import {store} from "./app/store"
import Todolist from "./features/todolist/Todolist";
import Countries from "./features/countries/Countries";
import Products from "./features/products/Products";
function App() {
  return (
    <Provider store={store}>
    <div className="border border-2 border-danger m-2 p-2">
       <h1>App...</h1>
       <Products></Products>
       <Counter></Counter>
       <Todolist></Todolist>
       <Countries></Countries>
    </div>
    </Provider>
  );
}
export default App;