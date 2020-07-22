import React from 'react'
import { login } from '../../redux/actions/users';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
const Login = (props) => {
    const history = useHistory();
    const onSubmit = (event) => {
        event.preventDefault();
        const credentials = {
            email: event.target.email.value,
            password: event.target.password.value,
        }
        login(credentials)
            .then(() => {
                notification.success({ message: 'Login success', description: 'Successfully logged in' })
                setTimeout(() => {
                    history.push('/')
                    // props.history.push('/')
                }, 1500);
            })
            .catch(error => {
                const errorMsg =error.response?.data?.message;
                notification.error({ message: 'Login failed', description: errorMsg});
            });
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="email" placeholder="Introduce your email" name="email" />
            <input type="password" placeholder="Introduce your password" name="password" />
            <button type="submit">Log in</button>
        </form>
    )
}

export default Login
