import { enviroment as ENV } from "../util/constants";
import { authFetch } from "../util/authFetch";

export const getMe = async () => {
    try {
        const url = `${ENV.API_URL}${ENV.ENDPOINTS.USERS_ME}`;
        const res = await authFetch(url);
        return await res.json();
    } catch (error) {
        console.error("Err getMe::: ", error);
        return null;
    }
}

/**
 * 
 * @param {*} formData datos del usuario a actualizar
 * @param {*} id id del usuario a actualizar
 * @returns {boolean}
 */
export const editAccount = async (formData, id) => {
    try {
        const url = `${ENV.API_URL}${ENV.ENDPOINTS.UPDATE_USER.replace(':id', id)}`;
        const response = await authFetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            return true;  
        }
        throw await response.json();
    } catch (error) {
        console.error("Err editAccount::: ", error);
        return false;
    }
}