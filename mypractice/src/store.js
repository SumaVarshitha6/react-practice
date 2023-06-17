import { combineReducers,createStore } from "redux";
import counterReducer from './counterReducer';
var store= createStore(combineReducers({counter:counterReducer}));
export default store;