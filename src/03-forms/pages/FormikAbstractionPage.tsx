
import { Formik, Form } from 'formik';
import { MyTextInput, MyCheckbox, MySelect } from '../components';
import * as Yup from 'yup';

export const FormikAbstractionPage = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        lastName: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        terms: Yup.boolean()
                            .required('Required')
                            .oneOf([true], 'You must accept the terms and conditions'),
                        jobType: Yup.string()
                            .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
                            .required('Required')
                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <MyTextInput 
                                label="First Name" 
                                name="firstName"
                                placeholder='First Name'
                             />

                            <MyTextInput 
                                label="Last Name" 
                                name="lastName"
                                placeholder='Last Name'
                            />

                            <MyTextInput 
                                label="Email" 
                                name="email"
                                placeholder='Email'
                                type='email'
                            />

                            <MySelect label="Job Type" name="jobType" >
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="development">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>
                            </MySelect>

                            <MyCheckbox label="Terms and Conditions" name="terms"  />

                            <button type='submit'>Crear</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
