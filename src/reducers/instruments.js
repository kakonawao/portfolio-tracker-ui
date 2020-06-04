import {
    FAIL_INSTRUMENTS,
    RECEIVE_INSTRUMENTS,
    REQUEST_INSTRUMENTS
} from "../actions/instruments";


const initialState = {
    loading: false,
    error: null,
    items: []
};

export const instrumentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_INSTRUMENTS:
            return {
                ...state,
                error: null,
                loading: true
            };
        case FAIL_INSTRUMENTS:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case RECEIVE_INSTRUMENTS:
            return {
                ...state,
                loading: false,
                items: action.data
            };
        default:
            return state;
    }
};
