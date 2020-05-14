
/*
Return a request options object using session data, method, body and content type.
 */
export const getRequestOptions = (session = null, method = "GET", body = null, contentType = "json") => {
    const headers = {
        "Content-Type": `application/${contentType}`,
    };
    if (session && session.authenticated) {
        headers["Authorization"] = `${session.tokenType} ${session.token}`;
    }

    return {
        method,
        body,
        headers
    }
};

/*
Analyse a response object and return its JSON-decoded data if OK, throw an error otherwise.
 */
export const handleResponse = (response) => {
    console.log(response);
    if (response.ok) {
        return response.json();
    }

    throw new Error(response.json().detail);
};
