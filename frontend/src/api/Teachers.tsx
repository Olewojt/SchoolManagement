export interface DummyTeacher {
    [key : string]: number | string | null;
    id: number;
    name: string;
    surname: string;
    subject: string | null;
    class: string | null;
    email: string;
}

export const DUMMY_TEACHERS: DummyTeacher[] = [
    {
        id: 1,
        name: "John",
        surname: "Smith",
        subject: "Mathematics",
        class: "5C",
        email: "JSmith@school.com"
    },
    {
        id: 2,
        name: "Emily",
        surname: "Johnson",
        subject: "English",
        class: "4B",
        email: "EJohnson@school.com"
    },
    {
        id: 3,
        name: "Michael",
        surname: "Brown",
        subject: "Physics",
        class: null,
        email: "MBrown@school.com"
    },
    {
        id: 4,
        name: "Sarah",
        surname: "Davis",
        subject: "History",
        class: "2C",
        email: "SDavis@school.com"
    },
    {
        id: 5,
        name: "David",
        surname: "Martinez",
        subject: "Physical Education",
        class: "1A",
        email: "DMartinez@school.com"
    },
    {
        id: 6,
        name: "Jennifer",
        surname: "Anderson",
        subject: "Art",
        class: "6B",
        email: "JAnderson@school.com"
    },
    {
        id: 7,
        name: "Robert",
        surname: "Wilson",
        subject: "Geography",
        class: "2A",
        email: "RWilson@school.com"
    },
    {
        id: 8,
        name: "Jessica",
        surname: "Taylor",
        subject: "Music",
        class: "6A",
        email: "JTaylor@school.com"
    },
    {
        id: 9,
        name: "Kevin",
        surname: "Thompson",
        subject: "Computer Science",
        class: null,
        email: "KThompson@school.com"
    },
    {
        id: 10,
        name: "Laura",
        surname: "Garcia",
        subject: "Foreign Language",
        class: "8A",
        email: "LGarcia@school.com"
    },
    {
        id: 11,
        name: "Kevin",
        surname: "Thompson",
        subject: "Computer Science",
        class: null,
        email: "KThompson2@school.com"
    },
    {
        id: 12,
        name: "Kevin",
        surname: "Thompson",
        subject: "Computer Science",
        class: null,
        email: "KThompson3@school.com"
    },
    {
        id: 13,
        name: "Kevin",
        surname: "Thompson",
        subject: "Computer Science",
        class: null,
        email: "KThompson4@school.com"
    },
    {
        id: 14,
        name: "Kevin",
        surname: "Thompson",
        subject: "Computer Science",
        class: null,
        email: "KThompson5@school.com"
    }
];
