import axios from 'axios';
import {getCookie} from "../helpers/Cookie";
import {clearStorageWhenLogOut} from "../helpers/utility/clearStorageWhenLogout";

// ## handle http request response
export const responseBody = (response: any) => {
    const responseData = response.data;

    if (
        Number(responseData.status_code) === 401 ||
        Number(responseData.status) === 401 ||
        responseData.message === "Token Invalid" ||
        responseData.message === "Unauthenticated."
    ) {
        clearStorageWhenLogOut();
    }
    return responseData;
};

// ## handle http request error
export const errorResponseBody = (error: any) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const backendError = error.response.data;
        if (
            Number(backendError.status_code) === 401 ||
            Number(backendError.status) === 401 ||
            backendError.message === "Token Invalid" ||
            backendError.message === "Unauthenticated."
        ) {
            clearStorageWhenLogOut();
        }
        return backendError;
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log("Error: axios ", error.message);
    }
};

const httpRequest = {
    get: (url = '', params = {}) =>
        axios
            .get(url, {
                params: params,
                headers: {
                    Authorization: `Bearer ${getCookie(process.env.REACT_APP_ACCESS_TOKEN)}`
                }
            })
            .then(responseBody)
            .catch(errorResponseBody),

    post: (url = '', body = {}) =>
        axios
            .post(url, body, {
                headers: {
                    Authorization: `Bearer ${getCookie(process.env.REACT_APP_ACCESS_TOKEN)}`
                }
            })
            .then(responseBody)
            .catch(errorResponseBody),

    put: (url = '', body = {}) =>
        axios
            .put(url, body, {
                headers: {
                    Authorization: `Bearer ${getCookie(process.env.REACT_APP_ACCESS_TOKEN)}`
                }
            })
            .then(responseBody)
            .catch(errorResponseBody),

    delete: (url = '', params = {}, body = {}) =>
        axios
            .delete(url, {
                data: body,
                params: params,
                headers: {
                    Authorization: `Bearer ${getCookie(process.env.REACT_APP_ACCESS_TOKEN)}`
                }
            })
            .then(responseBody)
            .catch(errorResponseBody)
};
export default httpRequest;
