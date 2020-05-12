import {
    FAIL_INSTRUMENTS,
    RECEIVE_INSTRUMENTS,
    REQUEST_INSTRUMENTS
} from "../actions/instruments";


const initialState = {
    loading: false,
    instruments: []
}

export const instrumentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_INSTRUMENTS:
            return {
                ...state,
                loading: true
            };
        case FAIL_INSTRUMENTS:
            return {
                ...state,
                loading: false
            };
        case RECEIVE_INSTRUMENTS:
            return {
                loading: false,
                instruments: action.data
            };
        default:
            return state;
    }
};
