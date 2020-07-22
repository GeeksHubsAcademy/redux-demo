import React from 'react'
import { signup } from '../../redux/actions/users'
const Signup = () => {
    const onSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }
        signup(user);
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Introduce your name" name="name" />
            <input type="email" placeholder="Introduce your email" name="email" />
            <input type="password" placeholder="Introduce your password" name="password" />
            <button type="submit">Sign up</button>
        </form>
    )
}

export default Signup
