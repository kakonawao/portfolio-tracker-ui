import fetch from "cross-fetch";

import { handleResponse } from "./util";
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

export const failToken = (data) => {
    return {
        type: FAIL_TOKEN,
        data
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
        const opts = {
            method: "POST",
            body: body,
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        };
        fetch(getEndpoint(PATHS.SESSION), opts)
            .then(response => handleResponse(response))
            .then((data) => {
                const tokenInfo = {
                    username: data.username,
                    token: data.access_token,
                    tokenType: data.token_type
                };

                dispatch(receiveToken(tokenInfo))
            })
            .catch(data => dispatch(failToken(data)));
    }
};
