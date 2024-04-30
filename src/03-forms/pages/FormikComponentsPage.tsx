
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const FormikComoponentsPage = () => {

    return (
        <div>
            <h1>Formik Components</h1>

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
                            <label htmlFor='firstName'>First Name</label>
                            <Field name="firstName" type="text" placeholder="First Name" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor='lastName'>Last Name</label>
                            <Field name="lastName" type="text" placeholder="Last Name" />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor='email'>Email</label>
                            <Field name="email" type="email" placeholder="Email" />
                            <ErrorMessage name="email" component="span" />

                            <label htmlFor='jobType'>Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="development">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span" />

                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms and conditions
                            </label>                       
                            <ErrorMessage name="terms" component="span" />

                            <button type='submit'>Crear</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
