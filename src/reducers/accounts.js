import {
    FAIL_ACCOUNTS,
    RECEIVE_ACCOUNTS,
    REQUEST_ACCOUNTS
} from "../actions/accounts";


const initialState = {
    loading: false,
    error: null,
    items: []
};

export const accountsReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_ACCOUNTS:
            return {
                ...state,
                error: null,
                loading: true
            };
        case FAIL_ACCOUNTS:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case RECEIVE_ACCOUNTS:
            return {
                ...state,
                loading: false,
                items: action.data
            };
        default:
            return state;
    }
};
