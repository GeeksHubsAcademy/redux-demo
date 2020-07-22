import {
    combineReducers
} from 'redux';
import moviesReducer from './movie';
import usersReducer from './user';
const reducer = combineReducers({
    movies: moviesReducer,
    users: usersReducer
});
export default reducer;