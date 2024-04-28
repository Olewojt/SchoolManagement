export interface DummyGrades {
    subject: string;
    grades: { grade: number; date: Date }[];
}

export const DUMMY_GRADES = [
    {
        subject: "Mathematics",
        grades: [
            {grade: 5, date: new Date(Date.now())},
            {grade: 4, date: new Date(Date.now())}
        ]
    },
    {
        subject: "Physics",
        grades: [
            {grade: 5, date: new Date(Date.now())},
            {grade: 3, date: new Date(Date.now())}
        ]
    },
    {
        subject: "Religion",
        grades: [
            {grade: 1, date: new Date(Date.now())},
            {grade: 2, date: new Date(Date.now())}
        ]
    },
    {
        subject: "History",
        grades: []
    },
    {
        subject: "Geography",
        grades: []
    },
    {
        subject: "Chemistry",
        grades: []
    },
    {
        subject: "Biology",
        grades: []
    },
    {
        subject: "Art",
        grades: []
    },
    {
        subject: "English",
        grades: []
    },
];
