import jwtDecode from 'jwt-decode';

export const tokenExpired = (token) => {
    const tokenDecode = jwtDecode(token);
    const expired = tokenDecode.exp * 1000;
    const time = new Date().getTime();
    if(time > expired) {
        return true;
    }
    return false;
    
}