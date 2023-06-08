import React from 'react';
import useHistory from 'react';
function addstd(){
    var history=useHistory();
    var s={
        name:"",
        number:"",
    };
    s.name=sf.name.value;
    s.number=sf.no.value; 
    stds.push(s);
    createtable(stds);               
     n.value="";
     no.value="";  
}