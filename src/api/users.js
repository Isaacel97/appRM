import { enviroment as ENV } from "../util/constants";
import { authFetch } from "../util/authFetch";

export const getMe = async (token) => {
    try {
        const url = `${ENV.API_URL}${ENV.ENDPOINTS.USERS_ME}`;
        const res = await authFetch(url);
        return await res.json();
    } catch (error) {
        console.error("Err getMe::: ", error);
        return null;
    }
}