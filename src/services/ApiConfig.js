export let baseUrl = "http://localhost:4000";

export const handleResponse = (response) =>{
    console.log("Handle Response: ", response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log("Handle Response: ", data);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(new Error(error));
        }
        return Promise.resolve(data);
    });
};
