import React from "react";
function YourForm(props,ref){
    return (
        <div>
            <h1>YourForm</h1>
            <input type='text' ref={ref}/>
        </div>
    )
}
export default React.forwardRef(YourForm);