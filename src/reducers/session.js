import {
    FAIL_TOKEN,
    RECEIVE_TOKEN,
    REQUEST_TOKEN
} from "../actions/session";


const initialState = {
    loading: false,
    error: null,
    authenticated: false,
    username: null,
    token: null,
    tokenType: null
};

export const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_TOKEN:
            return {
                ...initialState,
                loading: true
            };
        case FAIL_TOKEN:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case RECEIVE_TOKEN:
            return {
                ...state,
                ...action.data,
                loading: false,
                authenticated: true
            };
        default:
            return state;
    }
};
