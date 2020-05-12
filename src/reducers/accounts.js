import {
    FAIL_ACCOUNTS,
    RECEIVE_ACCOUNTS,
    REQUEST_ACCOUNTS
} from "../actions/accounts";


const initialState = {
    loading: false,
    accounts: []
};

export const accountsReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_ACCOUNTS:
            return {
                ...state,
                loading: true,
            };
        case FAIL_ACCOUNTS:
            return {
                ...state,
                loading: false
            };
        case RECEIVE_ACCOUNTS:
            return {
                ...state,
                loading: false,
                accounts: action.data
            };
        default:
            return state;
    }
};
