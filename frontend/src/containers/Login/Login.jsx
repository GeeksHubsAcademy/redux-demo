import React from 'react'
import { login } from '../../redux/actions';

const Login = () => {
    const onSubmit = (event) => {
        event.preventDefault();
        const credentials = {
            email: event.target.email.value,
            password: event.target.password.value,
        }
        login(credentials);
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="email" placeholder="Introduce your email" name="email"/>
            <input type="password" placeholder="Introduce your password" name="password"/>
            <button type="submit">Log in</button>
        </form>
    )
}

export default Login
