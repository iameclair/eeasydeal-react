import {baseUrl} from "./ApiConfig";
import {handleResponse} from "./ApiConfig";
const login = (user) => {
    const requestOptions ={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(baseUrl+'/api/auth/signin', requestOptions)
        .then(handleResponse)
        .then(authParams => {
            return Promise.resolve(authParams);
        }, error =>{
            return Promise.reject(error);
        });
};
async function fetchProfile(){
    const response = await fetch(`${baseUrl}/api/auth/profile`, {credentials: "include"});
    console.log("Auth Service profile response: ", response);
    return await handleResponse(response);
}
const logout = (token) =>{
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': 'JWT '+token},
    };
    return fetch(`${baseUrl}/v1/api/auth/logout`, requestOptions)
        .then(handleResponse)
        .then(success =>{
            localStorage.removeItem('user');
            return true;
        }, error =>{
            return error;
        });
};

const resetPassword = (email) =>{
    const requestOptions ={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email)
    };
    return fetch(baseUrl+'/v1/api/auth/password/reset', requestOptions)
        .then(handleResponse)
        .then(success => {
            if (success.message) {
                return success.message;
            }
            return "An Email might have been sent to your email address"
        }, error =>{
            return "There's been a problem submitting the email";
        });
};

const passwordResetConfirmation = (passwordReset) =>{
    const requestOptions ={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(passwordReset)
    };
    return fetch(baseUrl+'/v1/api/auth/password/reset/confirm', requestOptions)
        .then(handleResponse)
        .then(success => {
            return "Password changed successfully"
        }, error =>{
            return "There's been a problem changing password";
        });
};

const activateAccount = (token) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    return fetch(baseUrl+`/api/auth/activate/${token}`, requestOptions)
        .then(handleResponse)
        .then(success => {
            console.log("Auth Service Activate Account Success: ", success);
            return Promise.resolve(success);
        }, error =>{
            console.log("Auth Service Activate Account Failure: ", error);
            return Promise.reject(error);
        });
};

export const AuthService = {
    login,
    fetchProfile,
    logout,
    resetPassword,
    activateAccount,
    passwordResetConfirmation
};
