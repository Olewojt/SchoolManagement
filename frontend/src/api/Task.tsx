import TaskCardInterface from "@/interfaces/TaskCardInterface/TaskCardInterface.tsx";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import axiosClient from "@/axios-client.tsx";

export async function getUserTasks(userId: number): Promise<TaskCardInterface[]> {
    try {
        const response: AxiosResponse<TaskCardInterface[], AxiosRequestConfig> = await axiosClient.get<TaskCardInterface[]>(`/api/v1/tasks/assigned/info/${userId}`);
        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error fetching user tasks:', error);
        throw error;
    }
}

export async function updateTaskStatus(taskId: number): Promise<void> {
    try {
        await axiosClient.patch(`/api/v1/tasks/status/${taskId}`);
        // Optionally handle success if needed
    } catch (error) {
        // Handle the error as needed
        console.error('Error updating task status:', error);
        throw error;
    }
}