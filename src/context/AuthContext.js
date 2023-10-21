import React, { createContext, useState, useEffect } from 'react';
import { storageController } from '../api/token';
import { getMe } from '../api/users';
import { tokenExpired } from '../util/tokenExpired';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (token) => {
        try {
            await storageController.setToken(token);
            const response = await getMe();
            setUser(response);
            setLoading(false);
        } catch (error) {
            console.error("Err login context::: ", error);
        }
    }

    const getSession = async () => {
            const token = await storageController.getToken();
            if (!token) {
                logout();
                setLoading(false);
                return;
            } (tokenExpired(token)) ? logout() : login(token);
    }

    useEffect(() => {
        getSession();
    }, []);

    const logout = async () => {
        try {
            await storageController.removeToken();
            setUser(null);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

        const upDateUser = (key, value) => {
            setUser({
                ...user,
                [key]: value
            });
        }

    const data = {
        user,
        login,
        logout,
        upDateUser,
    };

    if (loading) return null;
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}