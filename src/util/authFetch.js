import { storageController } from "../api/token";
import { tokenExpired } from "./tokenExpired";

export const authFetch = async (url, params) => {
    const token = await storageController.getToken();
    
    if(!token || tokenExpired(token)) {
        storageController.removeToken();
        return;
    } 

    const paramsTemp = {
        ...params,
        headers: {
            ...params?.headers,
            Authorization: `Bearer ${token}`
        }
    }

    try {
        return await fetch(url, paramsTemp);
    } catch (error) {
        console.error("Err authFetch::: ", error);
    }
}