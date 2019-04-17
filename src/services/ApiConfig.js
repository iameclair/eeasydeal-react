export let baseUrl = "http://localhost:4000";

export const handleResponse = (response) =>{
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if(data.status === 200 || data.status === 201){
            return Promise.resolve(data);
        }
        else{
            return Promise.reject(data);
        }
    });
};
