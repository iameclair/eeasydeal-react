export let baseUrl = "http://localhost:4000";

export const handleResponse = (response) =>{
    const {status} = response;
    if(status === 200 || status === 201){
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            return Promise.resolve(data);
        });
    }else if(status === 404){
        return Promise.reject(new Error("resource not found"));
    }else{
        return Promise.reject(new Error("Something went wrong"));
    }
};
