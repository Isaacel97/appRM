import { enviroment as ENV } from "../util/constants";

const register = async(email, username, password) => {
    try {
        const url = `${ENV.API_URL}${ENV.ENDPOINTS.RESGISTER}`;
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, username, password })
        }
        const response = await fetch(url, params);
         if (response.status !== 200) throw response
         return response.json();
    } catch (error) {
        throw error;1
    }
}

const login = async(identifier, password) => {
    try {
        const url = `${ENV.API_URL}${ENV.ENDPOINTS.LOGIN}`;
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ identifier, password })
        }
        const response = await fetch(url, params);
         if (response.status !== 200) throw response
         return response.json();
    } catch (error) {
        throw error;
    }
}

export const authApi = {
    register,
    login
};