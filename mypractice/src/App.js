import {useFormik} from 'formik';
import * as Yup from 'yup';

function App() {
  var Userform = useFormik({
    initialValues: {
      name:'',
      age:'',
    },
    validationSchema: Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        age: Yup.number()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      }),
    onSubmit: (values)=>{
      console.log(values);
    }
  }) 
  return (
    <form onSubmit={Userform.handleSubmit} className='border border-2 border-info m-5 p-3'>
    <h1>Useformik</h1>
    <input type='text' {...Userform.getFieldProps('name')} /><br></br>
    <input type='number' {...Userform.getFieldProps('age')}/><br></br>
    <button type='button'>Save</button>
 </form>
  );
}
export default App;