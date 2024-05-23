import axios, {AxiosInstance} from "axios";
import {jwtDecode} from "jwt-decode";
import {User} from "api/User.tsx";

const axiosClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080",
})

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('BEARER_TOKEN')
    config.headers.Accept = 'application/json'
    config.headers["Content-Type"] = 'application/json'
    return config
})

axiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    const {response} = error

    if (response.status === 401 || response.status === 403) {
        removeToken()
    }

    throw error
})

export const getAuthToken = () => {
    return window.localStorage.getItem("BEARER_TOKEN")
}

export function removeToken() {
    window.localStorage.removeItem("BEARER_TOKEN");
}

export function decodeUserToken(token: string) {
    interface DecodedToken {
        jti: number; // id
        Role: string; // role
        sub: string; // email
        // Add any other properties your token might have
    }

    const decoded = jwtDecode<DecodedToken>(token);

    const userData: User = {
        id: decoded.jti,
        role: decoded.Role, // Access the Role attribute from the decoded token
        email: decoded.sub
    };

    return userData
}

export async function login(payload: {email: string, password: string}) {
    try {
        const response = await axiosClient.post('/login', payload);
        const token = response.headers.authorization;
        localStorage.setItem("BEARER_TOKEN", token);

        return decodeUserToken(token);
    } catch (error) {
        // Handle the error as needed
        console.error('Error logging in', error);
        throw error;
    }
}

export default axiosClient