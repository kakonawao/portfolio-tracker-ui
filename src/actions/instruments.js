import fetch from "cross-fetch";

import { handleResponse } from "./util";
import { getEndpoint, PATHS } from "../config";


export const REQUEST_INSTRUMENTS = "REQUEST_INSTRUMENTS";
export const RECEIVE_INSTRUMENTS = "RECEIVE_INSTRUMENTS";
export const FAIL_INSTRUMENTS = "FAIL_INSTRUMENTS";

export const requestInstruments = () => {
    return {
        type: REQUEST_INSTRUMENTS
    }
};

export const failInstruments = (error) => {
    return {
        type: FAIL_INSTRUMENTS,
        error
    }
};

export const receiveInstruments = (data) => {
    return {
        type: RECEIVE_INSTRUMENTS,
        data
    }
};

export const fetchInstruments = () => {
    return function (dispatch) {

        dispatch(requestInstruments());

        return fetch(getEndpoint(PATHS.INSTRUMENTS))
            .then(response => handleResponse(response))
            .then(data => dispatch(receiveInstruments(data)))
            .catch(data => dispatch(failInstruments(data)));
    }
};
