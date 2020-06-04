import fetch from "cross-fetch";

import {getRequestOptions, handleResponse} from "./util";
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

export const fetchInstruments = (session) => {
    return function (dispatch) {

        dispatch(requestInstruments());

        return fetch(getEndpoint(PATHS.INSTRUMENTS), getRequestOptions(session))
            .then(response => handleResponse(response))
            .then(data => dispatch(receiveInstruments(data)))
            .catch(error => dispatch(failInstruments(error)));
    }
};
