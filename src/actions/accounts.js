import fetch from "cross-fetch";

import { handleResponse } from "./util";
import { getEndpoint, PATHS } from "../config";


export const REQUEST_ACCOUNTS = "REQUEST_ACCOUNTS";
export const FAIL_ACCOUNTS = "FAIL_ACCOUNTS";
export const RECEIVE_ACCOUNTS = "RECEIVE_ACCOUNTS";

export const requestAccounts = () => {
    return {
        type: REQUEST_ACCOUNTS
    }
};

export const failAccounts = (response) => {
    return {
        type: FAIL_ACCOUNTS,
        response
    }
};

export const receiveAccounts = (data) => {
    return {
        type: RECEIVE_ACCOUNTS,
        data
    }
};

export const fetchAccounts = () => {
    return function (dispatch) {
        dispatch(requestAccounts());

        return fetch(getEndpoint(PATHS.ACCOUNTS))
            .then(response => handleResponse(response))
            .then(data => dispatch(receiveAccounts(data)))
            .catch(data => dispatch(failAccounts(data)));

    }
};