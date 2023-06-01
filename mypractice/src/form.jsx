import React from "react";
import Yform from "./Yform";
function Form(props){
    return (
        <div className='border border-2 border-success m-1 p-1'>
        <h1>MyForm</h1>
        <input onKeyUp={props.i1} type='text' ref={props.rh1} />
        <input onKeyUp={props.i2} type='text' ref={props.rh2} />
        <Yform rh3={props.rh3} i3={props.i3}></Yform>
        </div>
    )
}
export default Form;