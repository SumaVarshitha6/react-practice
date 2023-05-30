import logo from './logo.svg';
import './App.css';
import React from 'react';
import Tb from './Tb';

function App() {
  var [students,setStudents] = React.useState(
    [
      {
        firstname:'Ravi',
        lastname:'Sastri',
        gender:'male'
      },
      {
        firstname:'Sachin',
        lastname:'Tendulkar',
        gender:'male'
      },
      {
        firstname:'Mithali',
        lastname:'Raj',
        gender:'female'
      },
      {
        firstname:'Rohit',
        lastname:'Sharma',
        gender:'male'
      },
      {
        firstname:'Smriti',
        lastname:'Mandhana',
        gender:'female'
      },
      {
        firstname:'Virat',
        lastname:'Kohli',
        gender:'male'
      },
    ]);

  function sortStudents(key,order){
    var temp = [...students];
    temp.sort((s1,s2)=>{
      if(order==='asc'){
        if(s1[key]>s2[key]){
          return 1
        }
        else{
          return -1
        }
      }
      if(order==='dsc'){
        if(s1[key]>s2[key]){
          return -1
        }
        else{
          return 1
        }
      }
    });
    setStudents([...temp])
  }
    
  return (
    <div className="App border border-2 border-dark p-3">
          <h1>Students</h1>
           <Tb students={students} sortStudents={sortStudents}></Tb>         
    </div>
  );
}

export default App;
