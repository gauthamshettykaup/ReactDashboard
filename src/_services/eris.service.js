import { authHeader } from '../_helpers';

export const erisService = {
    getCapacity
};

function getCapacity() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    // return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
    return fetch(`
    http://localhost:5000/api/v1/eris`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        
        return data.data;
    });
}