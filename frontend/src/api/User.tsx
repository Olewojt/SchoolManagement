import {SubjectsGrades} from "api/Grades.tsx";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import axiosClient from "@/axios-client.tsx";

export interface User {
    id: number,
    role: string,
    email: string
}

export interface UserData {
    firstName: string | null,
    lastName: string | null,
    pesel: string | null,
    country: string | null,
    city: string | null,
    street: string | null,
    homeNumber: string | null,
    flatNumber: string | null,
}

export const defaultUserData: UserData = {
    firstName: null,
    lastName: null,
    pesel: null,
    country: null,
    city: null,
    street: null,
    homeNumber: null,
    flatNumber: null
};

export type FullUser = User & UserData & {class: string | null};

export async function getUserData(userId: number) {
    try {
        const response = await axiosClient.get(`/api/v1/users/personalInfo/${userId}`);

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error getting user data', error);
        throw error;
    }
}

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

export const DUMMY_STUDENTS: FullUser[] = [
    {
        id: 1,
        role: "Student",
        firstName: "John",
        lastName: "Smith",
        pesel: "12345678901",
        email: "JSmith@example.com",
        country: "USA",
        city: "New York",
        street: "Broadway",
        homeNumber: "123",
        flatNumber: null,
        class: "5C"
    },
    {
        id: 2,
        role: "Student",
        firstName: "Emily",
        lastName: "Johnson",
        pesel: "23456789012",
        email: "EJohnson@example.com",
        country: "USA",
        city: "Los Angeles",
        street: "Sunset Blvd",
        homeNumber: "456",
        flatNumber: null,
        class: "4B"
    },
    {
        id: 3,
        role: "Student",
        firstName: "Michael",
        lastName: "Brown",
        pesel: "34567890123",
        email: "MBrown@example.com",
        country: "USA",
        city: "Chicago",
        street: "Lake Shore Dr",
        homeNumber: "789",
        flatNumber: null,
        class: "3A"
    },
    {
        id: 4,
        role: "Student",
        firstName: "Sarah",
        lastName: "Davis",
        pesel: "45678901234",
        email: "SDavis@example.com",
        country: "USA",
        city: "Houston",
        street: "Main St",
        homeNumber: "1011",
        flatNumber: null,
        class: "2B"
    },
    {
        id: 5,
        role: "Student",
        firstName: "David",
        lastName: "Martinez",
        pesel: "56789012345",
        email: "DMartinez@example.com",
        country: "USA",
        city: "San Francisco",
        street: "Market St",
        homeNumber: "1213",
        flatNumber: null,
        class: "1A"
    },
    {
        id: 6,
        role: "Student",
        firstName: "Jennifer",
        lastName: "Anderson",
        pesel: "67890123456",
        email: "JAnderson@example.com",
        country: "USA",
        city: "Miami",
        street: "Ocean Dr",
        homeNumber: "1415",
        flatNumber: null,
        class: "6C"
    },
    {
        id: 7,
        role: "Student",
        firstName: "Robert",
        lastName: "Wilson",
        pesel: "78901234567",
        email: "RWilson@example.com",
        country: "USA",
        city: "Seattle",
        street: "Pike Pl",
        homeNumber: "1617",
        flatNumber: null,
        class: "5A"
    },
    {
        id: 8,
        role: "Student",
        firstName: "Jessica",
        lastName: "Taylor",
        pesel: "89012345678",
        email: "JTaylor@example.com",
        country: "USA",
        city: "Boston",
        street: "Newbury St",
        homeNumber: "1819",
        flatNumber: null,
        class: "4D"
    },
    {
        id: 9,
        role: "Student",
        firstName: "Kevin",
        lastName: "Thompson",
        pesel: "90123456789",
        email: "KThompson@example.com",
        country: "USA",
        city: "Dallas",
        street: "Elm St",
        homeNumber: "2021",
        flatNumber: null,
        class: "3B"
    },
    {
        id: 10,
        role: "Student",
        firstName: "Laura",
        lastName: "Garcia",
        pesel: "01234567890",
        email: "LGarcia@example.com",
        country: "USA",
        city: "Philadelphia",
        street: "Market St",
        homeNumber: "2223",
        flatNumber: null,
        class: "2C"
    },
    {
        id: 11,
        role: "Student",
        firstName: "Andrew",
        lastName: "Hernandez",
        pesel: "11234567890",
        email: "AHernandez@example.com",
        country: "USA",
        city: "Phoenix",
        street: "Camelback Rd",
        homeNumber: "2425",
        flatNumber: null,
        class: "1B"
    },
    {
        id: 12,
        role: "Student",
        firstName: "Michelle",
        lastName: "Young",
        pesel: "21234567890",
        email: "MYoung@example.com",
        country: "USA",
        city: "Denver",
        street: "Colfax Ave",
        homeNumber: "2627",
        flatNumber: null,
        class: "6A"
    },
    {
        id: 13,
        role: "Student",
        firstName: "James",
        lastName: "Lee",
        pesel: "31234567890",
        email: "JLee@example.com",
        country: "USA",
        city: "Las Vegas",
        street: "Las Vegas Blvd",
        homeNumber: "2829",
        flatNumber: null,
        class: "5B"
    },
    {
        id: 14,
        role: "Student",
        firstName: "Sophia",
        lastName: "Kim",
        pesel: "41234567890",
        email: "SKim@example.com",
        country: "USA",
        city: "Atlanta",
        street: "Peachtree St",
        homeNumber: "3031",
        flatNumber: null,
        class: "4C"
    },
    {
        id: 15,
        role: "Student",
        firstName: "Daniel",
        lastName: "Nguyen",
        pesel: "51234567890",
        email: "DNguyen@example.com",
        country: "USA",
        city: "Austin",
        street: "Congress Ave",
        homeNumber: "3233",
        flatNumber: null,
        class: "3D"
    }
];