import axios from 'axios';
import store from '../store';
import {
    SIGN_UP,
    LOGIN,
    SET_USER,
    LOGOUT
} from '../types/users';

export const signup = async(user) => {
    try {
        const res = await axios.post('users/register', user);
        store.dispatch({
            type: SIGN_UP
        });
        return res;
    } catch (error) {
        console.error(error);
    }
}

export const login = async(credentials) => {
    const res = await axios.post('users/login', credentials);
    store.dispatch({
        type: LOGIN,
        payload: res.data.user
    });
    localStorage.setItem('authToken', res.data.token);
    return res;
}
export const getInfo = async() => {
    const res = await axios.get('users/info');
    store.dispatch({
        type: SET_USER,
        payload: res.data
    });
    return res;
}
export const logout = async() => {
    try {
        const res = await axios.get('users/logout');
        store.dispatch({
            type: LOGOUT
        });
        localStorage.removeItem('authToken');
        return res;
    } catch (error) {
        console.error(error);
    }
}