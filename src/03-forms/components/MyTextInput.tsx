import { ErrorMessage, Field } from 'formik'

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any; //Este comodin te permite recibir cualquier cantidad de parámetros!!!
}

export const MyTextInput = ({ label, ...props } : Props ) => {

 /*  const [ field, meta ] = useField(props); */
//  const [ field ] = useField(props);

  return (
    <>
        <label htmlFor={ props.id || props.name }>{ label }</label>
        <Field { ...props } />
        {/* <input className="text-input" { ...field } { ...props }/> */}
        <ErrorMessage name={ props.name } component="span" />
        {/* {
            meta.touched && meta.error && (
                <span className="error">{ meta.error }</span>
            )
        } */}
    </>
  )
}
