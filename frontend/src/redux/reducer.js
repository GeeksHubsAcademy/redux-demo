const initialState = {
    user: {},
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}