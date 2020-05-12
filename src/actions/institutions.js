import fetch from "cross-fetch";

import { handleResponse } from "./util";
import { getEndpoint, PATHS } from "../config";

export const REQUEST_INSTITUTIONS = "REQUEST_INSTITUTIONS";
export const RECEIVE_INSTITUTIONS = "RECEIVE_INSTITUTIONS";
export const FAIL_INSTITUTIONS = "FAIL_INSTITUTIONS";


export const requestInstitutions = () => {
    return {
        type: REQUEST_INSTITUTIONS
    }
};

export const failInstitutions = (response) => {
    return {
        type: FAIL_INSTITUTIONS,
        response
    }
};

export const receiveInstitutions = (data) => {
    return {
        type: RECEIVE_INSTITUTIONS,
        data
    }
};

export const fetchInstitutions = () => {
    return function (dispatch) {

        dispatch(requestInstitutions());

        return fetch(getEndpoint(PATHS.INSTITUTIONS))
            .then(response => handleResponse(response))
            .then(data => dispatch(receiveInstitutions(data)))
            .catch(data => dispatch(failInstitutions(data)));
    }
};
