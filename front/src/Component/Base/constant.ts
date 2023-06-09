import { AxiosRequestConfig } from "axios";



export const token = localStorage.getItem("token");

export const config:AxiosRequestConfig = {
    
        headers:{Authorization: `Bearer ${token}`}
    }