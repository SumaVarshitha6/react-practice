import React from 'react';
import * as Yup from 'yup';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 
 const Forme = () => (
   <div className='border border-2 border-info m-5 p-3'>
    <h1>Formik Field Errormessage</h1>
     <Formik
       initialValues={{ name: '', age: '' }}

      //  validationSchema: Yup.object({
      //   firstName: Yup.string()
      //     .max(15, 'Must be 15 characters or less')
      //     .required('Required'),
      //   lastName: Yup.string()
      //     .max(20, 'Must be 20 characters or less')
      //     .required('Required'),
      //   email: Yup.string().email('Invalid email address').required('Required'),
      // })

       validate={
        (values) => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required name';
            } else if (
              !/^[A-Z]{3,}$/i.test(values.name)
            ) {
              errors.name = 'Invalid name';
            }
            if (!values.age) {
                errors.age = 'Required age';
              } else if (
                !/^[0-1]$/i.min(18).test(values.age)
              ) {
                errors.age = 'Invalid age';
              }
            return errors;
          }
        }

       onSubmit={(values) => {
         console.log(values);
       }}
     >
       {({ isSubmitting }) => (
         <Form >
           <Field name="name"/><br></br>
           <ErrorMessage name="name" /><br></br>
           <Field name="age" /><br></br>
           <ErrorMessage name="age" /><br></br>
           <button type='submit'>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default Forme;

// import React from 'react';
// import { Formik, Form , Field,} from 'formik';
// const Forme = ()=>(
    
//         <Formik
//         initialValues={{
//             name:"",
//             age:'',
//         }} 
// validate={values => {
//     const errors = {};
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//     ) {
//       errors.email = 'Invalid email address';
//     }
//     return errors;
//   }}
//
//         onSubmit={
//             (values)=>{
//                 console.log(values);
//             }
//         }
//         >
//             {({handleSubmit,getFieldProps})=>{
//                 <form onSubmit={handleSubmit}>
//                 <input type='text' {...getFieldProps('name')} /><br></br>
//                 <input type='number' {...getFieldProps('age')}/><br></br>
//                 <button>Save</button>
//              </form>
//             // <Form>
//             //     <Field ></Field>
//             // </Form>
//     }
// }
//         </Formik>
    
// );
// export default Forme;