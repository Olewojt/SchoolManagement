import {SubjectsGrades} from "api/Grades.tsx";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import axiosClient from "@/axios-client.tsx";

export interface User {
    id: number,
    role: string,
    email: string
}

export interface UserPersonalData {
    firstName: string | null,
    lastName: string | null,
    pesel: string | null,
    country: string | null,
    city: string | null,
    street: string | null,
    homeNumber: string | null,
    flatNumber: string | null,
}

interface SchoolClass {
    id: number,
    name: string
}

export type UserData = {
    personalInfo: UserPersonalData,
    schoolClassDTO: SchoolClass | null
}

export type FullUser = {
    personalInfo: User & UserPersonalData,
    schoolClassDTO: SchoolClass | null
}

export interface Child {
    id: number;
    firstName: string;
    schoolClass: string
}

export const defaultUserData: UserData = {
    personalInfo: {
        firstName: null,
        lastName: null,
        pesel: null,
        country: null,
        city: null,
        street: null,
        homeNumber: null,
        flatNumber: null
    },
    schoolClassDTO: null
};

export async function getUserData(userId: number) {
    try {
        const response = await axiosClient.get(`/api/v1/users/personalInfo/${userId}`);
        console.log(response.data);

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

export async function getParentChildren(userId: number): Promise<Child[]> {
    try {
        // Fetch the list of child IDs
        const response: AxiosResponse<number[], AxiosRequestConfig> = await axiosClient.get<number[]>(`http://localhost:8080/api/v1/parents/${userId}/children`);
        const childIds = response.data;

        // Fetch details for each child
        const childPromises: Promise<FullUser>[] = childIds.map(id => getUserData(id));
        const childrenDetails = await Promise.all(childPromises);

        // Map the details to the Child interface
        return childrenDetails.map(child => ({
            id: child.personalInfo.id,
            firstName: child.personalInfo.firstName ? child.personalInfo.firstName : "UNKNOWN",
            schoolClass: child.schoolClassDTO?.name ? child.schoolClassDTO.name : "ERROR",
        }));
    } catch (error) {
        console.error('Error fetching parent children:', error);
        throw error;
    }
}

export async function exportStudentGrades(userId: number, subjects: string[]): Promise<string> {
    try {
        const params = new URLSearchParams();
        subjects.forEach(subject => params.append('subjectNames', subject));

        const url = `/api/v1/reports/studentReport/${userId}?${params.toString()}`;

        const response: AxiosResponse<string, AxiosRequestConfig> = await axiosClient.get<string>(url);
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
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 1,
            name: "5C"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 2,
            name: "4B"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 3,
            name: "3A"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 4,
            name: "2B"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 5,
            name: "1A"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 6,
            name: "6C"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 7,
            name: "5A"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 8,
            name: "4D"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 9,
            name: "3B"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 10,
            name: "2C"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 11,
            name: "1B"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 12,
            name: "6A"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 13,
            name: "5B"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 14,
            name: "4C"
        }
    },
    {
        personalInfo: {
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
        },
        schoolClassDTO: {
            id: 15,
            name: "3D"
        }
    }
];