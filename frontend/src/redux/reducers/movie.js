import {
    GET_ALL_MOVIES,
    ADD_MOVIE_TO_CART,
    ADD_POPCORN
} from "../types/movies"

const initialState = {
    movies: [],
    cart: [],
    extras: {
        popcorn: 0,
        beverages: []
    }
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
        case ADD_POPCORN:
            return {
                ...state,
                extras: {
                    ...state.extras,
                    popcorn: state.extras.popcorn + 1
                }
            }
        default:
            return state
    }
}