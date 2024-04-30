import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import * as Yup from 'yup';
import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(3, 'Must be 3 characters or more')
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .min(6, 'Must be 6 characters or more')
                            .required('Required'),
                        confirmPassword: Yup.string()
                            .min(6, 'Must be 6 characters or more')
                            .required('Required')
                            .oneOf([Yup.ref('password')], 'Passwords must match')
                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <MyTextInput
                                label="Name"
                                name="name"
                                placeholder='Name'
                            />
                            <MyTextInput
                                label="Email"
                                name="email"
                                placeholder='Email'
                            />
                            <MyTextInput
                                label="Password"
                                name="password"
                                placeholder='Password'
                                type='password'
                            />
                            <MyTextInput
                                label="Confirm Password"
                                name="confirmPassword"
                                placeholder='Confirm Password'
                                type='password'
                            />
                            <br/>
                            <button type="submit">Create</button>
                            <button type="button" onClick={formik.handleReset}>Reset</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
} 
