import logo from './logo.svg';
import './App.css';
import React from 'react';
import Tb from './Tb';

function App() {
  var [order,setorder]=React.useState('asc')
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
          if(order==='asc'){
            temp.sort((s1,s2)=>{
              if(s1[key]>s2[key]){
                return 1
              }
              else{
                return -1
              }
            })
          }
          else{
            temp.sort((s1,s2)=>{
              if(s1[key]>s2[key]){
                return -1
              }
              else{
                return 1
              }
            })
          }
        (order==='asc')?setorder('dsc'):setorder('asc')
        setStudents([...temp])
  }
  return (
    <div className="App">
             <h1>Students</h1>
             <Tb students={students} sortStudents={sortStudents} order={order}></Tb>
    </div>
  );
}

export default App;
