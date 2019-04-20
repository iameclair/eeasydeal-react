import {baseUrl} from "./ApiConfig";
import {handleResponse} from "./ApiConfig";

const register = (user) => {
    const requestOptions ={
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
    };
    return fetch(baseUrl+'/api/auth/signup', requestOptions)
        .then(handleResponse);
};

export const RegisterService = { register };