import {
    FAIL_TOKEN,
    RECEIVE_TOKEN,
    REQUEST_TOKEN
} from "../actions/session";


const initialState = {
    loading: false,
    authenticated: false,
    username: null
};

export const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_TOKEN:
            return {
                ...state,
                loading: true
            };
        case FAIL_TOKEN:
            return {
                ...state,
                loading: false
            };
        case RECEIVE_TOKEN:
            return {
                ...state,
                loading: false,
                authenticated: true
            };
        default:
            return state;
    }
};
