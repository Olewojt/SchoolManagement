import axiosClient from "@/axios-client.tsx";
import {SchoolClassWithSubjects} from "api/Teachers.tsx";

export interface SchoolClassSubject {
    id: number,
    name: string,
    teacherInfo: {
        id: number,
        firstName: string,
        lastName: string
    }
}

export const defaultSchoolClassSubject = {
    id: -1,
    name: "",
    teacherInfo: {
        id: -1,
        firstName: "",
        lastName: ""
    }
}

export async function getSchoolClasses() : Promise<SchoolClassSubject[]> {
    try {
        const response = await axiosClient.get(`/api/v1/classes`);

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error getting user data', error);
        throw error;
    }
}

export async function getSchoolClassesSubjects() : Promise<SchoolClassWithSubjects[]> {
    try {
        const response = await axiosClient.get(`/api/v1/classes/subjects`);

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error getting user data', error);
        throw error;
    }
}

export async function addSubjectToClass() : Promise<SchoolClassSubject[]> {
    try {
        const response = await axiosClient.get(`/api/v1/classes`);

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error getting user data', error);
        throw error;
    }
}