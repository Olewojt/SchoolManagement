export interface DummyGrades {
    subject: string;
    grades: { grade: number; date: Date }[];
}

export const DUMMY_GRADES = [
    {
        "subject": "Physics",
        "grades": [
            {"grade": 4, "date": "2024-04-10"},
            {"grade": 3, "date": "2024-04-25"},
            {"grade": 5, "date": "2024-05-08"}
        ]
    },
    {
        "subject": "Religion",
        "grades": [
            {"grade": 1, "date": "2024-03-28"},
            {"grade": 2, "date": "2024-04-15"}
        ]
    },
    {
        "subject": "History",
        "grades": [
            {"grade": 3, "date": "2024-05-02"},
            {"grade": 4, "date": "2024-05-10"}
        ]
    },
    {
        "subject": "Geography",
        "grades": [
            {"grade": 5, "date": "2024-04-15"},
            {"grade": 3, "date": "2024-04-30"}
        ]
    },
    {
        "subject": "Chemistry",
        "grades": [
            {"grade": 4, "date": "2024-04-19"},
            {"grade": 5, "date": "2024-05-05"}
        ]
    },
    {
        "subject": "Biology",
        "grades": [
            {"grade": 4, "date": "2024-04-25"},
            {"grade": 3, "date": "2024-05-12"}
        ]
    },
    {
        "subject": "Art",
        "grades": [
            {"grade": 5, "date": "2024-05-06"},
            {"grade": 4, "date": "2024-05-11"}
        ]
    },
    {
        "subject": "English",
        "grades": [
            {"grade": 4, "date": "2024-05-10"},
            {"grade": 5, "date": "2024-05-12"}
        ]
    }
]
