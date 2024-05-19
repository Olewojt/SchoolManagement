import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

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

interface StudentGrades {
    "grade": number,
    "subjectName": string,
    "gradedAt": string
}

export async function getUserGrades(userId: number): Promise<StudentGrades[]> {
    try {
        const response: AxiosResponse<StudentGrades[], AxiosRequestConfig> = await axiosClient.get<StudentGrades[]>(`/api/v1/tasks/grades/${userId}`);
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

export default axiosClient