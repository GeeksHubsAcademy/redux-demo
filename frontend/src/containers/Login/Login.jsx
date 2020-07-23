import React, { useRef, useEffect, useState } from 'react'
import { login } from '../../redux/actions/users';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
const Login = (props) => {
    const history = useHistory();
    const [isRed, setIsRed] = useState(false)
    const [passwordError, setPasswordError] = useState('')
    const emailInputRef = useRef(null);//1º guardamos la referencia en una variable
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
                const errorMsg = error.response?.data?.message;
                notification.error({ message: 'Login failed', description: errorMsg });
            });
    }
    useEffect(() => {
        console.log(emailInputRef.current)
        setTimeout(() => {
            // emailInputRef.current.style.backgroundColor = 'red';
            setIsRed(true)
        }, 2000);
    }, [])
    const validatePassword = event => {
        if (event.target.value.length < 6) {
            setPasswordError('Password must be at least 6 characters');
        }else{
            setPasswordError('')
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="email" ref={emailInputRef}
                style={{
                    backgroundColor: isRed ? 'red' : 'white'
                }}
                placeholder="Introduce your email" name="email" />
            <input onKeyUp={validatePassword} type="password" placeholder="Introduce your password" name="password" />
            {passwordError}
            <button type="submit">Log in</button>
        </form>
    )
}

export default Login
