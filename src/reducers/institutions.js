import {
    FAIL_INSTITUTIONS,
    REQUEST_INSTITUTIONS,
    RECEIVE_INSTITUTIONS
} from "../actions/institutions";


const initialState = {
    loading: false,
    institutions: []
};

export const institutionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_INSTITUTIONS:
            return {
                ...state,
                loading: true
            };
        case FAIL_INSTITUTIONS:
            return {
                ...state,
                loading: false
            };
        case RECEIVE_INSTITUTIONS:
            return {
                loading: false,
                institutions: action.data
            };
        default:
            return state;
    }
};
