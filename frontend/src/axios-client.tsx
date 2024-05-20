import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {SubjectsGrades} from "api/Grades.tsx";

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

    if (response.status === 401) {
        localStorage.removeItem('BEARER_TOKEN')
    }

    throw error
})

export async function getUserGrades(userId: number): Promise<SubjectsGrades[]> {
    try {
        const response: AxiosResponse<SubjectsGrades[], AxiosRequestConfig> = await axiosClient.get<SubjectsGrades[]>(`/api/v1/tasks/subjects/grades/${userId}`);
        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error fetching user grades:', error);
        throw error;
    }
}

export async function exportStudentGrades(userId: number): Promise<string> {
    try {
        const response: AxiosResponse<string, AxiosRequestConfig> = await axiosClient.get<string>(`/api/v1/reports/studentReport/${userId}`);
        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error requesting student grades report', error);
        throw error;
    }
}

export async function exportSubjectClassGrades(classId: number, subjectId: number): Promise<string> {
    try {
        const response: AxiosResponse<string, AxiosRequestConfig> = await axiosClient.get<string>(`/api/v1/reports/subjectReport/${classId}/${subjectId}`);
        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error requesting subject class grades report', error);
        throw error;
    }
}

export async function exportTeacherTasks(teacherId: number, startDate: Date, endDate: Date): Promise<string> {
    try {
        const response: AxiosResponse<string, AxiosRequestConfig> =
            await axiosClient.get<string>(
                `/api/v1/reports/teacherReport/${teacherId}`,
                {
                    params: {
                        startDate: startDate.toISOString().split('T')[0],
                        endDate: endDate.toISOString().split('T')[0]
                    }
                }
            );

        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error requesting teacher report', error);
        throw error;
    }
}

export default axiosClient