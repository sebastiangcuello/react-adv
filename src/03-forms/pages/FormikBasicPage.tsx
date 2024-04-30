
import { useFormik, FormikErrors } from 'formik';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ( { firstName, lastName, email } : FormValues )=> {
        const errors: FormikErrors<FormValues> = {};

        if (!firstName) {
            errors.firstName = 'First Name is required';
        } else if(firstName.length >= 15) {
            errors.firstName = 'First Name must be 15 characters or less';
        }

        if (!lastName) {
            errors.lastName = 'Last Name is required';
        } else if (lastName.length >= 20) {
            errors.lastName = 'Last Name must be 20 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

        return errors;
    }

    const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validate
    
    });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='First Name'
                    onChange= { handleChange }
                    onBlur= { handleBlur }
                    value={ values.firstName }
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    placeholder='Last Name'
                    onChange= { handleChange }
                    onBlur= { handleBlur }
                    value={ values.lastName }
                />
               { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    placeholder='Email'
                    onChange= { handleChange }
                    onBlur= { handleBlur }
                    value={ values.email }
                />
                { touched.email && errors.email && <span>{ errors.email }</span> }

                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}
