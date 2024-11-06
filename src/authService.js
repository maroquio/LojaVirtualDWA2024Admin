import api from "./axiosApi";
import { jwtDecode } from "jwt-decode";

export const login = async (email, senha) => {
    let loggedIn = false;
    await api.post("auth/entrar", { "email": email, "senha": senha })
        .then((response) => {
            if (response.status === 200) {
                if (response.data.token) {                    
                    const jsonString = JSON.stringify(response.data.token);
                    localStorage.setItem("token", jsonString);
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
    return JSON.parse(localStorage.getItem("token"));
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

export const authHeader = () => {
    const token = getToken();
    if (token) {
        return { "x-access-token": token };
    } else {
        return {};
    }
};