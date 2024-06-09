import {AxiosRequestConfig, AxiosResponse} from "axios";
import axiosClient from "@/axios-client.tsx";
import React from "react";

interface NotificationsProps {
    children?: React.ReactNode;
    className?: string
    style?: React.CSSProperties
}

export const DUMMY_NOTIFICATIONS = [
    {
        title: "Deadline approaching",
        date: "20.04.2024",
        content: "Task \"Complex motion\" (Physics) due date is approaching. Submit before the deadline."
    },
    {
        title: "Deadline approaching",
        date: "18.04.2024",
        content: "Task \"Step siblings vocabulary\"(English) due date is approaching. Submit before the deadline."
    },
    {
        title: "Deadline approaching",
        date: "18.04.2024",
        content: "Task \"People in Africa\"(History) due date is approaching. Submit before the deadline."
    },
    {
        title: "Task graded",
        date: "17.04.2024",
        content: "Task \"Linear motion\" (Physics) has been graded. Check your score and feedback."
    },
    {
        title: "Task graded",
        date: "17.04.2024",
        content: "Task \"Integrals\" (Mathematics) has been graded. Check your score and feedback."
    },
    {
        title: "New task",
        date: "17.04.2024",
        content: "Task \"Complex motion\" (Physics) has been created by Mr. Smith, due date next week (21.04.2024)"
    },
    {
        title: "New task",
        date: "16.04.2024",
        content: "Task \"Linear motion\" (Physics) has been created by Mr. Smith, due date next week (20.04.2024)"
    }
];

export async function getNotifications(userId: number): Promise<NotificationsProps[]> {
    try {
        const response: AxiosResponse<NotificationsProps[], AxiosRequestConfig> = await axiosClient.get<NotificationsProps[]>(`/api/v1/notifications/users/${userId}`);
        // Handle the response as needed
        console.log(response.data)
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error fetching user tasks:', error);
        throw error;
    }
}