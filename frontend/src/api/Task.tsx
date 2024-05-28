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

export async function getTeacherTasks(teacherId: number): Promise<TaskCardInterface[]> {
    try {
        const response: AxiosResponse<TaskCardInterface[], AxiosRequestConfig> = await axiosClient.get<TaskCardInterface[]>(`/api/v1/tasks/created/${teacherId}`);
        // Handle the response as needed

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error fetching user tasks:', error);
        throw error;
    }
}

export async function taskStatusDone(taskId: number): Promise<void> {
    try {
        await axiosClient.patch(`/api/v1/tasks/status/done/${taskId}`);
        // Optionally handle success if needed
    } catch (error) {
        // Handle the error as needed
        console.error('Error updating task status:', error);
        throw error;
    }
}
export async function taskStatusTODO(taskId: number): Promise<void> {
    try {
        await axiosClient.patch(`/api/v1/tasks/status/todo/${taskId}`);
        // Optionally handle success if needed
    } catch (error) {
        // Handle the error as needed
        console.error('Error updating task status:', error);
        throw error;
    }
}

export async function teacherTaskInfo(teacherId: number): Promise<any[]> {
    try {
        const response: AxiosResponse<any[], AxiosRequestConfig> = await axiosClient.get<TaskCardInterface[]>(`/api/v1/tsic/${teacherId}`);
        // Handle the response as needed

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error fetching user tasks:', error);
        throw error;
    }
}

interface TaskPayload {
    title: string;
    deadline: string;
    subjectName: string;
    schoolClassName: string;
    description: string;
    taskMembersGroups: {
        userId: number;
        firstName: string;
        lastName: string;
    }[][];
    taskCreatorId: number;
}

export async function createTask(taskPayload: TaskPayload): Promise<TaskCardInterface> {
    try {
        const response: AxiosResponse<TaskCardInterface, AxiosRequestConfig> = await axiosClient.post<TaskCardInterface>('/api/v1/tasks', taskPayload);
        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error creating task:', error);
        throw error;
    }
}

export async function deleteAttachmentFromTask(taskAttachmentId: string): Promise<void> {
    try {
        await axiosClient.delete<void>(`/api/v1/attachments/${taskAttachmentId}`);
        // Optionally handle success if needed
    } catch (error) {
        // Handle the error as needed
        console.error('Error deleting task attachment:', error);
        throw error;
    }
}
export async function downloadAttachmentFromTask(taskAttachmentId: string): Promise<ArrayBuffer> {
    try {
        const response: AxiosResponse<ArrayBuffer, AxiosRequestConfig> = await axiosClient.get<ArrayBuffer>(`/api/v1/attachments/${taskAttachmentId}`);
        // Handle the response as needed

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error fetching user tasks:', error);
        throw error;
    }
}