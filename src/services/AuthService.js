import {baseUrl} from "./ApiConfig";
import {handleResponse} from "./ApiConfig";

const login = (user) => {
    const requestOptions ={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(baseUrl+'/v1/api/auth/token-auth', requestOptions)
        .then(handleResponse)
        .then(authParams => {
            if (authParams.token) {
              localStorage.setItem('authParams', JSON.stringify(authParams));
            }
            return Promise.resolve(authParams);
        }, error =>{
            console.log("There's been an error: ",error);
            return Promise.reject(new Error(error));
        });
};
async function fetchProfile(userId){
    const response = await fetch(`${baseUrl}/v1/api/auth/sellers/${userId}`);
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

const activateAccount = (activate) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(activate)
    };
    return fetch(baseUrl+'/v1/api/auth/users/activate', requestOptions)
        .then(handleResponse)
        .then(success => {
            return "Account activated successfully"
        }, error =>{
            return "There's been a problem activating account";
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
