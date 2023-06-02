import {useFormik} from 'formik';

function Uformik(){
    var Userform = useFormik({
        initialValues: {
          name:'',
          age:'',
        },
        
        onSubmit: (values)=>{
          console.log(values);
        }
      }) 
      return (
        <form onSubmit={Userform.handleSubmit}>
            <input type='text' {...Userform.getFieldProps('name')} /><br></br>
            <input type='number' {...Userform.getFieldProps('age')}/><br></br>
            <button>Save</button>
         </form>
      );
}
export default Uformik;