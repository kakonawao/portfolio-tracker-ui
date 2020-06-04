import fetch from "cross-fetch";

import { getRequestOptions, handleResponse } from "./util";
import { getEndpoint, PATHS } from "../config";


export const REQUEST_ACCOUNTS = "REQUEST_ACCOUNTS";
export const FAIL_ACCOUNTS = "FAIL_ACCOUNTS";
export const RECEIVE_ACCOUNTS = "RECEIVE_ACCOUNTS";

export const requestAccounts = () => {
    return {
        type: REQUEST_ACCOUNTS
    }
};

export const failAccounts = (error) => {
    return {
        type: FAIL_ACCOUNTS,
        error
    }
};

export const receiveAccounts = (data) => {
    return {
        type: RECEIVE_ACCOUNTS,
        data
    }
};

export const fetchAccounts = (session) => {
    return function (dispatch) {
        dispatch(requestAccounts());

        return fetch(getEndpoint(PATHS.ACCOUNTS), getRequestOptions(session))
            .then(response => handleResponse(response))
            .then(data => dispatch(receiveAccounts(data)))
            .catch(error => dispatch(failAccounts(error)));
    }
};
