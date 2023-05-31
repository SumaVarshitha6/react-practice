import React from 'react';
function Address(props){
  return(
    <div className="mybox">
      <input type="text" placeholder="hno" ref={props.href} onKeyUp={props.hno}/>
      <input type="text" placeholder="city" ref={props.cref}/>
    </div>
  )
}
export default Address;