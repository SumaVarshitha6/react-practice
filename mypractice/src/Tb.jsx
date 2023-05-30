function Tb(props){
    return (
        <table className="table table-bordered ">
              <thead>
                <th onClick={()=>{props.sortStudents('firstname','asc')}}>Firstname</th>
                <th onClick={()=>{props.sortStudents('lastname','asc')}}>Lastname</th>
                <th onClick={()=>{props.sortStudents('gender','asc')}}>Gender</th>
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