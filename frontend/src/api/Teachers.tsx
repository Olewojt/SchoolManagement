import {FullUser} from "api/User.tsx";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import axiosClient from "@/axios-client.tsx";

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

export async function getTeachers(): Promise<TeacherSelection[]> {
    try {
        const response: AxiosResponse<TeacherSelection[], AxiosRequestConfig> = await axiosClient.get<TeacherSelection[]>(`/api/v1/teachers`);

        // Handle the response as needed
        return response.data;
    } catch (error) {
        // Handle the error as needed
        console.error('Error requesting teachers list', error);
        throw error;
    }
}

export type Teacher = FullUser & {subject: string}

export const DUMMY_TEACHERS: Teacher[] = [
    {
        personalInfo: {
            id: 1,
            role: "Teacher",
            email: "JSmith@school.com",
            firstName: "John",
            lastName: "Smith",
            pesel: "12345678901",
            country: "USA",
            city: "New York",
            street: "5th Avenue",
            homeNumber: "123",
            flatNumber: "1A",
        },
        schoolClassDTO: null,
        subject: "Mathematics"
    },
    {
        personalInfo: {
            id: 2,
            role: "Teacher",
            email: "EJohnson@school.com",
            firstName: "Emily",
            lastName: "Johnson",
            pesel: "23456789012",
            country: "USA",
            city: "Los Angeles",
            street: "Sunset Boulevard",
            homeNumber: "456",
            flatNumber: "2B",
        },
        schoolClassDTO: null,
        subject: "English"
    },
    {
        personalInfo: {
            id: 3,
            role: "Teacher",
            email: "MBrown@school.com",
            firstName: "Michael",
            lastName: "Brown",
            pesel: "34567890123",
            country: "USA",
            city: "Chicago",
            street: "Michigan Avenue",
            homeNumber: "789",
            flatNumber: "3C",
        },
        schoolClassDTO: null,
        subject: "Physics"
    },
    {
        personalInfo: {
            id: 4,
            role: "Teacher",
            email: "SDavis@school.com",
            firstName: "Sarah",
            lastName: "Davis",
            pesel: "45678901234",
            country: "USA",
            city: "Houston",
            street: "Main Street",
            homeNumber: "101",
            flatNumber: "4D",
        },
        schoolClassDTO: null,
        subject: "History"
    },
    {
        personalInfo: {
            id: 5,
            role: "Teacher",
            email: "DMartinez@school.com",
            firstName: "David",
            lastName: "Martinez",
            pesel: "56789012345",
            country: "USA",
            city: "Phoenix",
            street: "Washington Street",
            homeNumber: "202",
            flatNumber: "5E",
        },
        schoolClassDTO: null,
        subject: "Physical Education"
    },
    {
        personalInfo: {
            id: 6,
            role: "Teacher",
            email: "JAnderson@school.com",
            firstName: "Jennifer",
            lastName: "Anderson",
            pesel: "67890123456",
            country: "USA",
            city: "Philadelphia",
            street: "Market Street",
            homeNumber: "303",
            flatNumber: "6F",
        },
        schoolClassDTO: null,
        subject: "Art"
    },
    {
        personalInfo: {
            id: 7,
            role: "Teacher",
            email: "RWilson@school.com",
            firstName: "Robert",
            lastName: "Wilson",
            pesel: "78901234567",
            country: "USA",
            city: "San Antonio",
            street: "Alamo Plaza",
            homeNumber: "404",
            flatNumber: "7G",
        },
        schoolClassDTO: null,
        subject: "Geography"
    },
    {
        personalInfo: {
            id: 8,
            role: "Teacher",
            email: "JTaylor@school.com",
            firstName: "Jessica",
            lastName: "Taylor",
            pesel: "89012345678",
            country: "USA",
            city: "San Diego",
            street: "Broadway",
            homeNumber: "505",
            flatNumber: "8H",
        },
        schoolClassDTO: null,
        subject: "Music"
    },
    {
        personalInfo: {
            id: 9,
            role: "Teacher",
            email: "KThompson@school.com",
            firstName: "Kevin",
            lastName: "Thompson",
            pesel: "90123456789",
            country: "USA",
            city: "Dallas",
            street: "Elm Street",
            homeNumber: "606",
            flatNumber: "9I",
        },
        schoolClassDTO: null,
        subject: "Computer Science"
    },
    {
        personalInfo: {
            id: 10,
            role: "Teacher",
            email: "LGarcia@school.com",
            firstName: "Laura",
            lastName: "Garcia",
            pesel: "01234567890",
            country: "USA",
            city: "San Jose",
            street: "Santa Clara Street",
            homeNumber: "707",
            flatNumber: "10J",
        },
        schoolClassDTO: null,
        subject: "Foreign Language"
    },
    {
        personalInfo: {
            id: 11,
            role: "Teacher",
            email: "KThompson2@school.com",
            firstName: "Kevin",
            lastName: "Thompson",
            pesel: "90123456789",
            country: "USA",
            city: "Dallas",
            street: "Elm Street",
            homeNumber: "606",
            flatNumber: "9I",
        },
        schoolClassDTO: null,
        subject: "Computer Science"
    },
    {
        personalInfo: {
            id: 12,
            role: "Teacher",
            email: "KThompson3@school.com",
            firstName: "Kevin",
            lastName: "Thompson",
            pesel: "90123456789",
            country: "USA",
            city: "Dallas",
            street: "Elm Street",
            homeNumber: "606",
            flatNumber: "9I",
        },
        schoolClassDTO: null,
        subject: "Computer Science"
    },
    {
        personalInfo: {
            id: 13,
            role: "Teacher",
            email: "KThompson4@school.com",
            firstName: "Kevin",
            lastName: "Thompson",
            pesel: "90123456789",
            country: "USA",
            city: "Dallas",
            street: "Elm Street",
            homeNumber: "606",
            flatNumber: "9I",
        },
        schoolClassDTO: null,
        subject: "Computer Science"
    },
    {
        personalInfo: {
            id: 14,
            role: "Teacher",
            email: "KThompson5@school.com",
            firstName: "Kevin",
            lastName: "Thompson",
            pesel: "90123456789",
            country: "USA",
            city: "Dallas",
            street: "Elm Street",
            homeNumber: "606",
            flatNumber: "9I",
        },
        schoolClassDTO: null,
        subject: "Computer Science"
    }
];
