import axios from 'axios';
import store from './store';

export const signup = async(user) => {
    try {
        const res = await axios.post('http://localhost:3001/users/register', user);
        store.dispatch({
            type: 'SIGN_UP'
        });
        return res;
    } catch (error) {
        console.error(error);
    }
}

export const login = async(credentials) => {
    try {
        const res = await axios.post('http://localhost:3001/users/login', credentials);
        store.dispatch({
            type: 'LOGIN',
            payload: res.data.user
        });
        localStorage.setItem('authToken', res.data.token);
        return res;
    } catch (error) {
        console.error(error);
    }
}
export const logout = async() => {
    try {
        const res = await axios.get('http://localhost:3001/users/logout');
        store.dispatch({
            type: 'LOGOUT'
        });
        localStorage.removeItem('authToken');
        return res;
    } catch (error) {
        console.error(error);
    }
}