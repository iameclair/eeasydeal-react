export let baseUrl = "http://localhost:4000";

export const handleResponse = (response) =>{
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        const {status} = data;
        console.log("status: ", status);
        if(status === 2000 || status === 201){
            return Promise.resolve(data);
        }else{
            return Promise.reject(data);
        }
    });
};
