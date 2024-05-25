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

export const DUMMY_TASK_TEACHER = [
    {
        class: "2B",
        subjects: ["english", "dupisz"],
        members: [
            {
                id: 1,
                firstName: "Maciek",
                lastName: "Psikuta"
            },
            {
                id: 2,
                firstName: "Bożena",
                lastName: "Bożena"
            }
        ]
    },
    {
        class: "69A",
        subjects: ["religia", "kozactwo"],
        members: [
            {
                id: 3,
                firstName: "Fabian",
                lastName: "Psikuta"
            },
            {
                id: 4,
                firstName: "Bożena",
                lastName: "Niebożena"
            }
        ]
    }
]