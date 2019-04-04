export let baseUrl = "http://localhost:8000";

export const handleResponse = (response) =>{
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(new Error(error));
        }
        return Promise.resolve(data);
    });
};
