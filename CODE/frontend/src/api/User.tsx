import {SubjectsGrades} from "api/Grades.tsx";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import axiosClient from "@/axios-client.tsx";
import {GUEST} from "utilitiesconstants.tsx/";

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
    phoneNumber: string | null,
    isFromCity?: boolean
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
    personalInfoDTO: User & UserPersonalData,
    schoolClassDTO: SchoolClass | null
}

export type Student = {
    id: number,
    email: string,
    personalInfoDTO: UserPersonalData,
    schoolClassDTO: SchoolClass
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
        flatNumber: null,
        phoneNumber: null
    },
    schoolClassDTO: null
};

export const defaultUserPersonalInfoDTO = {
    firstName: null,
    lastName: null,
    pesel: null,
    country: null,
    city: null,
    street: null,
    homeNumber: null,
    flatNumber: null,
    phoneNumber: null,
    isFromCity: null
};

export const defaultStudentData: Student = {
    id: -1,
    email: "",
    personalInfoDTO: defaultUserPersonalInfoDTO,
    schoolClassDTO: {
        id: 1,
        name: "5A"
    }
}

export const defaultParentData: Parent = {
    id: -1,
    email: "",
    personalInfoDTO: defaultUserPersonalInfoDTO,
    children: []
}

export const defaultFullUserData: FullUser = {
    personalInfoDTO: {
        id: -1,
        role: GUEST,
        email: "",
        firstName: null,
        lastName: null,
        pesel: null,
        country: null,
        city: null,
        street: null,
        homeNumber: null,
        flatNumber: null,
        phoneNumber: null
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

export async function deleteUser(userId: number) {
    try {
        const response = await axiosClient.delete(`/api/v1/users/${userId}`);
        console.log(response.data);

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error getting user data', error);
        throw error;
    }
}

export async function createNewStudent(data: Student) {
    try {
        const url = '/api/v1/users?roleName=Student';
        const response = await axiosClient.post(url, {
            email: data.email,
            password: "password123",
            personalInfoDTO: data.personalInfoDTO,
        });

        // After creating the student, update the class
        await updateUserClass(response.data.id, data.schoolClassDTO.name);

        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error creating new student', error);
        throw error;
    }
}

export async function createNewParent(data: Parent) {
    try {
        const url = '/api/v1/users?roleName=Parent';

        const response = await axiosClient.post(url, {
            email: data.email,
            password: "password123",
            personalInfoDTO: data.personalInfoDTO,
        });

        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error creating new student', error);
        throw error;
    }
}

export interface UpdateTeacherPersonalData {
    firstName: string,
    lastName: string,
    pesel: string,
    country: string,
    city: string,
    street: string,
    homeNumber: string,
    flatNumber: string,
    isFromCity?: boolean
}

export async function updateUserData(userId: number, personalInfo: UpdateTeacherPersonalData) {
    try {
        const response = await axiosClient.put(
            `/api/v1/users/personalInfo/${userId}`,
            personalInfo
        );

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error updating user data', error);
        throw error;
    }
}

export async function updateUserClass(userId: number, className: string) {
    try {
        const response = await axiosClient.put(`/api/v1/users/${userId}/classes?className=${className}`);

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error updating user class', error);
        throw error;
    }
}

interface GetStudents {
    id: number,
    email: string,
    personalInfo: UserPersonalData,
    schoolClassDTO: SchoolClass
}

export interface Parent {
    id: number,
    email: string,
    personalInfoDTO: UserPersonalData
    children:
        {
            id: number,
            email: string,
            firstName: string,
            lastName: string,
            phoneNumber: string
        }[]
}

export interface GetParents {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    children: [
        {
            id: number,
            email: string,
            firstName: string,
            lastName: string,
            phoneNumber: string
        }
    ],
}

export async function getStudents(): Promise<GetStudents[]> {
    try {
        const response = await axiosClient.get(`/api/v1/students`);

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error getting user data', error);
        throw error;
    }
}

export async function getParents(): Promise<GetParents[]> {
    try {
        const response = await axiosClient.get(`/api/v1/parents`);

        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error getting user data', error);
        throw error;
    }
}

export async function setParentChildren(parentId: number, childrenIds: number[]){
    try {
        const response = await axiosClient.put(
            `/api/v1/parents/${parentId}/children`,
            childrenIds
        );

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
        const childPromises: Promise<GetStudents>[] = childIds.map(id => getUserData(id));
        const childrenDetails = await Promise.all(childPromises);

        // Map the details to the Child interface
        return childrenDetails.map(child => ({
            id: child.id,
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

// export const DUMMY_STUDENTS: Student[] = [
//     {
//         id: 1,
//         email: "JSmith@example.com",
//         personalInfoDTO: {
//             firstName: "John",
//             lastName: "Smith",
//             pesel: "12345678901",
//             country: "USA",
//             city: "New York",
//             street: "Broadway",
//             homeNumber: "123",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 1,
//             name: "5C"
//         }
//     },
//     {
//         id: 2,
//         email: "EJohnson@example.com",
//         personalInfoDTO: {
//             firstName: "Emily",
//             lastName: "Johnson",
//             pesel: "23456789012",
//             country: "USA",
//             city: "Los Angeles",
//             street: "Sunset Blvd",
//             homeNumber: "456",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 2,
//             name: "4B"
//         }
//     },
//     {
//         id: 3,
//         email: "MBrown@example.com",
//         personalInfoDTO: {
//             firstName: "Michael",
//             lastName: "Brown",
//             pesel: "34567890123",
//             country: "USA",
//             city: "Chicago",
//             street: "Lake Shore Dr",
//             homeNumber: "789",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 3,
//             name: "3A"
//         }
//     },
//     {
//         id: 4,
//         email: "SDavis@example.com",
//         personalInfoDTO: {
//             firstName: "Sarah",
//             lastName: "Davis",
//             pesel: "45678901234",
//             country: "USA",
//             city: "Houston",
//             street: "Main St",
//             homeNumber: "1011",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 4,
//             name: "2B"
//         }
//     },
//     {
//         id: 5,
//         email: "DMartinez@example.com",
//         personalInfoDTO: {
//             firstName: "David",
//             lastName: "Martinez",
//             pesel: "56789012345",
//             country: "USA",
//             city: "San Francisco",
//             street: "Market St",
//             homeNumber: "1213",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 5,
//             name: "1A"
//         }
//     },
//     {
//         id: 6,
//         email: "JAnderson@example.com",
//         personalInfoDTO: {
//             firstName: "Jennifer",
//             lastName: "Anderson",
//             pesel: "67890123456",
//             country: "USA",
//             city: "Miami",
//             street: "Ocean Dr",
//             homeNumber: "1415",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 6,
//             name: "6C"
//         }
//     },
//     {
//         id: 7,
//         email: "RWilson@example.com",
//         personalInfoDTO: {
//             firstName: "Robert",
//             lastName: "Wilson",
//             pesel: "78901234567",
//             country: "USA",
//             city: "Seattle",
//             street: "Pike Pl",
//             homeNumber: "1617",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 7,
//             name: "5A"
//         }
//     },
//     {
//         id: 8,
//         email: "JTaylor@example.com",
//         personalInfoDTO: {
//             firstName: "Jessica",
//             lastName: "Taylor",
//             pesel: "89012345678",
//             country: "USA",
//             city: "Boston",
//             street: "Newbury St",
//             homeNumber: "1819",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 8,
//             name: "4D"
//         }
//     },
//     {
//         id: 9,
//         email: "KThompson@example.com",
//         personalInfoDTO: {
//             firstName: "Kevin",
//             lastName: "Thompson",
//             pesel: "90123456789",
//             country: "USA",
//             city: "Dallas",
//             street: "Elm St",
//             homeNumber: "2021",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 9,
//             name: "3B"
//         }
//     },
//     {
//         id: 10,
//         email: "LGarcia@example.com",
//         personalInfoDTO: {
//             firstName: "Laura",
//             lastName: "Garcia",
//             pesel: "01234567890",
//             country: "USA",
//             city: "Philadelphia",
//             street: "Market St",
//             homeNumber: "2223",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 10,
//             name: "2C"
//         }
//     },
//     {
//         id: 11,
//         email: "AHernandez@example.com",
//         personalInfoDTO: {
//             firstName: "Andrew",
//             lastName: "Hernandez",
//             pesel: "11234567890",
//             country: "USA",
//             city: "Phoenix",
//             street: "Camelback Rd",
//             homeNumber: "2425",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 11,
//             name: "1B"
//         }
//     },
//     {
//         id: 12,
//         email: "MYoung@example.com",
//         personalInfoDTO: {
//             firstName: "Michelle",
//             lastName: "Young",
//             pesel: "21234567890",
//             country: "USA",
//             city: "Denver",
//             street: "Colfax Ave",
//             homeNumber: "2627",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 12,
//             name: "6A"
//         }
//     },
//     {
//         id: 13,
//         email: "JLee@example.com",
//         personalInfoDTO: {
//             firstName: "James",
//             lastName: "Lee",
//             pesel: "31234567890",
//             country: "USA",
//             city: "Las Vegas",
//             street: "Las Vegas Blvd",
//             homeNumber: "2829",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 13,
//             name: "5B"
//         }
//     },
//     {
//         id: 14,
//         email: "SKim@example.com",
//         personalInfoDTO: {
//             firstName: "Sophia",
//             lastName: "Kim",
//             pesel: "41234567890",
//             country: "USA",
//             city: "Atlanta",
//             street: "Peachtree St",
//             homeNumber: "3031",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 14,
//             name: "4C"
//         }
//     },
//     {
//         id: 15,
//         email: "DNguyen@example.com",
//         personalInfoDTO: {
//             firstName: "Daniel",
//             lastName: "Nguyen",
//             pesel: "51234567890",
//             country: "USA",
//             city: "Austin",
//             street: "Congress Ave",
//             homeNumber: "3233",
//             flatNumber: null,
//         },
//         schoolClassDTO: {
//             id: 15,
//             name: "3D"
//         }
//     }
// ];