import axiosClient from "@/axios-client.tsx";

interface Subject {
    id: number,
    name: string
}

export interface SchoolClass {
    id: number,
    name: string,
    subjectDTOs: Subject[]
}

export async function getSchoolClasses() : Promise<SchoolClass[]> {
    try {
        const response = await axiosClient.get(`/api/v1/classes`);

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error getting user data', error);
        throw error;
    }
}

export async function addSubjectToClass() : Promise<SchoolClass[]> {
    try {
        const response = await axiosClient.get(`/api/v1/classes`);

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error getting user data', error);
        throw error;
    }
}