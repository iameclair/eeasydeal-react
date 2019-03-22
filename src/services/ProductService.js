import {baseUrl, handleResponse} from "./ApiConfig";

async function getProducts(){
    const response = await fetch(baseUrl+"/v1/api/products");
    return await handleResponse(response);
}
async function getProductsofPage(page){
    const response = await fetch(`${baseUrl}/v1/api/products/?page=${page}`);
    return await handleResponse(response);
}
async function getProductById(id) {
    const response = await fetch(baseUrl+"/v1/api/products/"+id);
    return await handleResponse(response);
}

async function viewCart(token) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`
        }
    };

    const response = await fetch(`${baseUrl}/v1/api/cart`, requestOptions);
    return await handleResponse(response);
}

const addProductToCart = (product, token) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`
        },
        body: JSON.stringify(product)
    };
    return fetch(`${baseUrl}/v1/api/cart/create`, requestOptions)
        .then(handleResponse)
        .then(data => {
            localStorage.setItem("cart", JSON.stringify(data));
            return {
                quantity: data.quantity,
                message: "Product added successfully"
            };
        }, error =>{
            return `There's adding product to cart: ${error}`;
        });
};

const removeProductFromCart = (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(id)
    };
    return fetch(`${baseUrl}/v1/api/cart/item/${id}/delete`, requestOptions)
        .then(handleResponse)
        .then(success => {
            return success.message
        }, error =>{
            return "There's been a problem activating account: "+ error;
        });
};

const updateProductInCart = (id) => {
    const requestOptions = {
        method: 'UPDATE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(id)
    };
    return fetch(`${baseUrl}/v1/api/cart/item/${id}/update`, requestOptions)
        .then(handleResponse)
        .then(success => {
            return success.message
        }, error =>{
            return "Can't update product: "+ error;
        });
};

export const ProductService = {
    getProducts,
    getProductsofPage,
    getProductById,
    viewCart,
    addProductToCart,
    removeProductFromCart,
    updateProductInCart
};