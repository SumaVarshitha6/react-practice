var initialState={
    count:100
}
var counterReducer=function(state=initialState,action){
    if(action.type==='INCREMENT'){
        return {...state,count:state.count+1}
    }
    if(action.type==='DECREMENT'){
        return {...state,count:state.count-1}
    }
    if(action.type==='RESET'){
        return {...state,count:initialState.count}
    }
}
export default counterReducer;