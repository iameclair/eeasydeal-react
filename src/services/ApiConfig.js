export let baseUrl = "http://localhost:8000";

export const handleResponse = (response) =>{
    return response.text().then(text => {
        console.log("Processing response: ", response);
        const data = text && JSON.parse(text);
        console.log("Processed response: ", data);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(new Error(error));
        }
        return Promise.resolve(data);
    });
};
