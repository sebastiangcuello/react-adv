
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const FormikYupPage = () => {

    const { 
        handleSubmit, getFieldProps, errors, touched 
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required')
        })
    
    });

    return (
        <div>
            <h1>Formik Yup</h1>

            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor='firstName'>First Name</label>
                {/* El getFieldsProps es una forma de obtener el valor de cada campo,
                Además agrega el OnChange, el OnBlur, etc y nos evitamos tener
                 que repetir todo el tiempo lo mismo en todos los input*/}
                <input type='text' placeholder='First Name' { ...getFieldProps('firstName')} /> 
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

                <label htmlFor='lastName'>Last Name</label>
                <input type='text' placeholder='Last Name' { ...getFieldProps('lastName')} /> 
               { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

                <label htmlFor='email'>Email</label>
                <input type='text' placeholder='Email' { ...getFieldProps('email')} /> 
                { touched.email && errors.email && <span>{ errors.email }</span> }

                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}
