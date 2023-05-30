function Tb(props){
return (
    <table border="1px" width="100%">
            <thead>
              <th onClick={()=>{props.sortStudents('firstname',props.order)}}>Firstname</th>
              <th onClick={()=>{props.sortStudents('lastname',props.order)}}>Lastname</th>
              <th onClick={()=>{props.sortStudents('gender',props.order)}}>Gender</th>
            </thead>
            {
              props.students.map((student)=>{
                return <tr>
                  <td>{student.firstname}</td>
                  <td>{student.lastname}</td>
                  <td>{student.gender}</td>
                </tr>
              })
            }
          </table>
)
}
export default Tb;