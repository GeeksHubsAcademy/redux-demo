import axios from 'axios';
import store from '../store.js';
import {
    GET_ALL_MOVIES,
    ADD_MOVIE_TO_CART
} from '../types/movies.js';

export const getAllMovies = async() => {
    const res = await axios.get('movies');
    store.dispatch({
        type: GET_ALL_MOVIES,
        payload: res.data
    })
}
export const getByPage = async(page) => {
    const res = await axios.get('movies/page/' + page);
    store.dispatch({
        type: GET_ALL_MOVIES,
        payload: res.data
    })
}
export const addMovieToCart = (movie) => {
    const cart = store.getState().movies.cart;

    store.dispatch({
        type: ADD_MOVIE_TO_CART,
        payload: [...cart, movie]
    })
}