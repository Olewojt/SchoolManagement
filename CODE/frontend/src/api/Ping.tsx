import { AxiosResponse } from "axios";
import axiosClient from "@/axios-client.tsx";

export async function pingServer(): Promise<number> {
    try {
        const response: AxiosResponse<string> = await axiosClient.post<string>("/ping");
        console.log('Ping successful.');
        return response.status;
    } catch (error) {
        console.error('Error fetching ping:', error);
        throw error;
    }
}