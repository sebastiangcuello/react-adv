import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';


export const RegisterPage = () => {

    const { 
        formData, onChange, resetForm, isValidEmail,
        name, email, password, confirmPassword
     } = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(formData);
    }


    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Name"    
                    name="name"
                    value={name}
                    onChange={onChange}
                    className={ `${ name.trim().length <= 0 && 'has-error'}` }
                />
                { name.trim().length <= 0 && <span className='error'>Name is required</span>}
                
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={ `${ !isValidEmail(email) && 'has-error'}` }
                />
                { !isValidEmail(email) && <span className='error'>Invalid email</span>}

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    className={ `${ password.trim().length <= 0 && 'has-error'}` }
                />
                { password.trim().length <= 0 && <span className='error'>Password is required</span>}
                { password.trim().length < 6 && password.trim().length > 0 && <span className='error'>Password lenght must be 6 or more characters</span>}

                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChange}
                    className={ `${ confirmPassword.trim().length <= 0 && 'has-error'}` }
                />
                { confirmPassword.trim().length <= 0 && <span className='error'>Confirm Password is required</span>}
                { confirmPassword.trim().length > 0 && password !== confirmPassword && <span className='error'>Confirm Password must be equal to Password</span>}

                <button type="submit">Create</button> 
                <button type="button" onClick={ resetForm }>Reset</button>

            </form>
        </div>
    )
} 
