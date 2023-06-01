import React from "react";
function Yform(props){
    return (
        <div className='border border-2 border-info m-2 p-2'>
            <h1>YourForm</h1>
        <input type='text' ref={props.rh3} />
        </div>
    )
}
export default Yform;