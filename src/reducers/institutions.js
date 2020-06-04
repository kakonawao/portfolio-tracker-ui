import {
    FAIL_INSTITUTIONS,
    REQUEST_INSTITUTIONS,
    RECEIVE_INSTITUTIONS
} from "../actions/institutions";


const initialState = {
    loading: false,
    error: null,
    items: []
};

export const institutionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_INSTITUTIONS:
            return {
                ...state,
                error: null,
                loading: true
            };
        case FAIL_INSTITUTIONS:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case RECEIVE_INSTITUTIONS:
            return {
                ...state,
                loading: false,
                items: action.data
            };
        default:
            return state;
    }
};
