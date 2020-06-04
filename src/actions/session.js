import fetch from "cross-fetch";

import { getRequestOptions, handleResponse } from "./util";
import { getEndpoint, PATHS } from "../config";


export const REQUEST_TOKEN = "REQUEST_TOKEN";
export const RECEIVE_TOKEN = "RECEIVE_TOKEN";
export const FAIL_TOKEN = "FAIL_TOKEN";

export const requestToken = () => {
    return {
        type: REQUEST_TOKEN
    };
};


export const receiveToken = (data) => {
    return {
        type: RECEIVE_TOKEN,
        data
    }
};

export const failToken = (error) => {
    return {
        type: FAIL_TOKEN,
        error
    }
};

export const login = (data) => {
    return function (dispatch) {
        dispatch(requestToken());

        const formData = {
            ...data,
            grant_type: "password"
        };
        const body = new URLSearchParams(formData).toString();
        const url = getEndpoint(PATHS.SESSION);
        const opts = getRequestOptions(null, "POST", body, "x-www-form-urlencoded");

        return fetch(url, opts)
            .then(response => handleResponse(response))
            .then(data => dispatch(receiveToken({
                    username: data.username,
                    token: data.access_token,
                    tokenType: data.token_type})))
            .catch(error => dispatch(failToken(error)));
    }
};
