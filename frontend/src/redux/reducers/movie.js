import {
    GET_ALL_MOVIES,
    ADD_MOVIE_TO_CART
} from "../types/movies"

const initialState = {
    movies: [],
    cart: []
}
export default function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case ADD_MOVIE_TO_CART:
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state
    }
}