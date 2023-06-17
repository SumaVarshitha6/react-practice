import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todolist/todoSlice";
import {countriesApi} from "../services/countriesApi";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store=configureStore({
    reducer:{
           counter:counterReducer,
           todolist:todoReducer,
           [countriesApi.reducerPath]:countriesApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(countriesApi.middleware),
})
setupListeners(store.dispatch)