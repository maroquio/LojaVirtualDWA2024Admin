import api from "./axiosApi";
import { jwtDecode } from "jwt-decode";

export const login = async (email, senha) => {
    let loggedIn = false;
    const loginEndpoint = "auth/entrar";
    await api.post(loginEndpoint, { "email": email, "senha": senha })
        .then((response) => {
            if (response.status === 200) {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                    loggedIn = isAdmin();
                }
            } else {
                console.log("Login error: " + response);
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
    return loggedIn;
};

export const logout = () => {
    localStorage.removeItem("token");
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const isAdmin = () => {
    const token = getToken();
    if (token) {
        const decoded = jwtDecode(token);
        return (decoded.perfil === 0);
    } else {
        return false;
    }
};

export const getUserData = () => {
    const token = getToken();
    if (token) {
        const decoded = jwtDecode(token);
        return decoded;
    } else {
        return null;
    }
};