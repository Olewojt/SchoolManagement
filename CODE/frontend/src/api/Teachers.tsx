import {defaultUserPersonalInfoDTO, UserPersonalData} from "api/User.tsx";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import axiosClient from "@/axios-client.tsx";
import {SchoolClassSubject} from "api/Classes.tsx";

export interface ClassesSubjects {
    className: string,
    subjectNames: string[]
}

// for principal report
export interface TeacherSelection {
    id: number,
        firstName: string,
        lastName: string
}

export interface SchoolClassWithSubjects {
    id: number,
    name: string,
    subjectDTOs: SchoolClassSubject[]
}

export type Teacher = {
    id: number,
    email: string,
    personalInfoDTO: UserPersonalData,
    schoolClassWithSubjectsDTOs: SchoolClassWithSubjects[]
}

export const defaultTeacherData: Teacher = {
    id: -1,
    email: "",
    personalInfoDTO: defaultUserPersonalInfoDTO,
    schoolClassWithSubjectsDTOs: []
}

export async function getTeacherClassesSubjects(userId: number): Promise<ClassesSubjects[]> {
    try {
        const response: AxiosResponse<ClassesSubjects[], AxiosRequestConfig> = await axiosClient.get<ClassesSubjects[]>(`/api/v1/teachers/classes/subjects/${userId}`);
        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error fetching user grades:', error);
        throw error;
    }
}

export async function exportSubjectClassGrades(className: string, subjects: string[]): Promise<string> {
    try {
        const params = new URLSearchParams();
        subjects.forEach(subject => params.append('subjectNames', subject));

        const url = `/api/v1/reports/subjectReport/${className}?${params.toString()}`;

        const response: AxiosResponse<string, AxiosRequestConfig> = await axiosClient.get<string>(url);
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

export async function getTeachers(): Promise<Teacher[]> {
    try {
        const response: AxiosResponse<Teacher[], AxiosRequestConfig> = await axiosClient.get<Teacher[]>(`/api/v1/tsic`);

        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error requesting teachers info', error);
        throw error;
    }
}

export async function setTeacherSubjectInClass(className: string, subjectName: string, teacherId: number) {
    try {
        const url = `/api/v1/tsic/${className}?subjectName=${subjectName}&teacherId=${teacherId}`

        console.log("URL = ", url)

        const response = await axiosClient.put(url);

        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error setting teacher subject in class', error);
        throw error;
    }
}

export async function createNewTeacher(data: Teacher) {
    try {
        const url = `/api/v1/users?roleName=Teacher`;
        const response = await axiosClient.post(url, {
            email: data.email,
            password: "password123",
            personalInfoDTO: data.personalInfoDTO,
        });

        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error creating new teacher', error);
        throw error;
    }
}

export async function getBasicTeachers(): Promise<TeacherSelection[]> {
    try {
        const response: AxiosResponse<TeacherSelection[], AxiosRequestConfig> = await axiosClient.get<TeacherSelection[]>(`/api/v1/teachers`);

        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error requesting teachers info', error);
        throw error;
    }
}

// export const DUMMY_TEACHERS: Teacher[] = [
//     {
//         id: 1,
//         email: "john.smith@example.com",
//         personalInfoDTO: {
//             firstName: "John",
//             lastName: "Smith",
//             pesel: "12345678901",
//             country: "USA",
//             city: "New York",
//             street: "5th Avenue",
//             homeNumber: "123",
//             flatNumber: "1A",
//         },
//         schoolClassWithSubjectsDTOs: [
//             {
//                 id: 1,
//                 name: "5A",
//                 subjectDTOs: [
//                     { id: 1, name: "Math" },
//                     { id: 2, name: "Science" }
//                 ]
//             }
//         ]
//     },
//     {
//         id: 2,
//         email: "EJohnson@school.com",
//         personalInfoDTO: {
//             firstName: "Emily",
//             lastName: "Johnson",
//             pesel: "23456789012",
//             country: "USA",
//             city: "Los Angeles",
//             street: "Sunset Boulevard",
//             homeNumber: "456",
//             flatNumber: "2B",
//         },
//         schoolClassWithSubjectsDTOs: []
//     },
//     {
//         id: 3,
//         email: "MBrown@school.com",
//         personalInfoDTO: {
//             firstName: "Michael",
//             lastName: "Brown",
//             pesel: "34567890123",
//             country: "USA",
//             city: "Chicago",
//             street: "Michigan Avenue",
//             homeNumber: "789",
//             flatNumber: "3C",
//         },
//         schoolClassWithSubjectsDTOs: []
//     },
//     {
//         id: 4,
//         email: "SDavis@school.com",
//         personalInfoDTO: {
//             firstName: "Sarah",
//             lastName: "Davis",
//             pesel: "45678901234",
//             country: "USA",
//             city: "Houston",
//             street: "Main Street",
//             homeNumber: "101",
//             flatNumber: "4D",
//         },
//         schoolClassWithSubjectsDTOs: []
//     },
//     {
//         id: 5,
//         email: "DMartinez@school.com",
//         personalInfoDTO: {
//             firstName: "David",
//             lastName: "Martinez",
//             pesel: "56789012345",
//             country: "USA",
//             city: "Phoenix",
//             street: "Washington Street",
//             homeNumber: "202",
//             flatNumber: "5E",
//         },
//         schoolClassWithSubjectsDTOs: []
//     },
//     {
//         id: 6,
//         email: "JAnderson@school.com",
//         personalInfoDTO: {
//             firstName: "Jennifer",
//             lastName: "Anderson",
//             pesel: "67890123456",
//             country: "USA",
//             city: "Philadelphia",
//             street: "Market Street",
//             homeNumber: "303",
//             flatNumber: "6F",
//         },
//         schoolClassWithSubjectsDTOs: []
//     },
//     {
//         id: 7,
//         email: "RWilson@school.com",
//         personalInfoDTO: {
//             firstName: "Robert",
//             lastName: "Wilson",
//             pesel: "78901234567",
//             country: "USA",
//             city: "San Antonio",
//             street: "Alamo Plaza",
//             homeNumber: "404",
//             flatNumber: "7G",
//         },
//         schoolClassWithSubjectsDTOs: []
//     },
//     {
//         id: 8,
//         email: "JTaylor@school.com",
//         personalInfoDTO: {
//             firstName: "Jessica",
//             lastName: "Taylor",
//             pesel: "89012345678",
//             country: "USA",
//             city: "San Diego",
//             street: "Broadway",
//             homeNumber: "505",
//             flatNumber: "8H",
//         },
//         schoolClassWithSubjectsDTOs: []
//     },
//     {
//         id: 9,
//         email: "KThompson@school.com",
//         personalInfoDTO: {
//             firstName: "Kevin",
//             lastName: "Thompson",
//             pesel: "90123456789",
//             country: "USA",
//             city: "Dallas",
//             street: "Elm Street",
//             homeNumber: "606",
//             flatNumber: "9I",
//         },
//         schoolClassWithSubjectsDTOs: []
//     },
//     {
//         id: 10,
//         email: "LGarcia@school.com",
//         personalInfoDTO: {
//             firstName: "Laura",
//             lastName: "Garcia",
//             pesel: "01234567890",
//             country: "USA",
//             city: "San Jose",
//             street: "Santa Clara Street",
//             homeNumber: "707",
//             flatNumber: "10J",
//         },
//         schoolClassWithSubjectsDTOs: []
//     },
//     {
//         id: 11,
//         email: "KThompson2@school.com",
//         personalInfoDTO: {
//             firstName: "Kevin",
//             lastName: "Thompson",
//             pesel: "90123456789",
//             country: "USA",
//             city: "Dallas",
//             street: "Elm Street",
//             homeNumber: "606",
//             flatNumber: "9I",
//         },
//         schoolClassWithSubjectsDTOs: []
//     },
//     {
//         id: 12,
//         email: "KThompson3@school.com",
//         personalInfoDTO: {
//             firstName: "Kevin",
//             lastName: "Thompson",
//             pesel: "90123456789",
//             country: "USA",
//             city: "Dallas",
//             street: "Elm Street",
//             homeNumber: "606",
//             flatNumber: "9I",
//         },
//         schoolClassWithSubjectsDTOs: []
//     },
//     {
//         id: 13,
//         email: "KThompson4@school.com",
//         personalInfoDTO: {
//             firstName: "Kevin",
//             lastName: "Thompson",
//             pesel: "90123456789",
//             country: "USA",
//             city: "Dallas",
//             street: "Elm Street",
//             homeNumber: "606",
//             flatNumber: "9I",
//         },
//         schoolClassWithSubjectsDTOs: []
//     },
//     {
//         id: 14,
//         email: "KThompson5@school.com",
//         personalInfoDTO: {
//             firstName: "Kevin",
//             lastName: "Thompson",
//             pesel: "90123456789",
//             country: "USA",
//             city: "Dallas",
//             street: "Elm Street",
//             homeNumber: "606",
//             flatNumber: "9I",
//         },
//         schoolClassWithSubjectsDTOs: []
//     }
// ];